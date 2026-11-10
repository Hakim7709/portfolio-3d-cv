#!/usr/bin/env python3
"""
Automated Batch Email Dispatcher for Ireland Job Campaign
Author: Md Hakim Mia Job Suite

Provides safe, throttled sending of personalized applications with CV attachments.
Protects candidate email domain reputation and prevents spam flags.
"""

import os
import sys
import time
import csv
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

sys.path.insert(0, os.path.dirname(__file__))
from data.companies_50_ireland import COMPANIES_50
from generate_50_applications import build_cover_letter

CANDIDATE_NAME = "Md Hakim Mia"
CANDIDATE_EMAIL = "mdhakimmia.me@gmail.com"
CANDIDATE_PHONE = "+966570457976"

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
LOG_FILE = os.path.join(os.path.dirname(__file__), "sent_applications_log.csv")

def ensure_log_file():
    if not os.path.exists(LOG_FILE):
        with open(LOG_FILE, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["Timestamp", "Company_ID", "Company_Name", "Recipient_Email", "Status", "Notes"])

def log_sent_status(company_id: int, company_name: str, recipient: str, status: str, notes: str = ""):
    ensure_log_file()
    with open(LOG_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([datetime.now().strftime("%Y-%m-%d %H:%M:%S"), company_id, company_name, recipient, status, notes])

def send_campaign_batch(app_password: str, batch_size: int = 5, start_index: int = 0):
    """
    Sends personalized emails to a specified batch of target companies.
    Uses rate limiting (4s pause) between sends.
    """
    cv_attachment_path = os.path.join(os.path.dirname(__file__), "..", "portfolio", "public", "cv", "md_hakim_mia_cv.html")

    target_batch = COMPANIES_50[start_index : start_index + batch_size]
    print(f"\n==================================================")
    print(f"🎯 Starting Application Batch ({len(target_batch)} Companies)")
    print(f"==================================================")

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.ehlo()
        server.starttls()
        server.login(CANDIDATE_EMAIL, app_password)
        print(f"[OK] Authenticated successfully with {CANDIDATE_EMAIL} via {SMTP_SERVER}\n")
    except Exception as e:
        print(f"[ERROR] SMTP Authentication failed: {e}")
        print("\n💡 NOTE FOR GMAIL USERS:")
        print("Google requires a 16-character 'App Password' instead of your regular password.")
        print("To generate one:")
        print("  1. Go to https://myaccount.google.com/security")
        print("  2. Enable 2-Step Verification (if not already enabled)")
        print("  3. Search for 'App passwords' -> Create 'Antigravity Job Suite'")
        print("  4. Paste the 16-letter code into this script or set GMAIL_APP_PASSWORD env var.\n")
        return False

    success_count = 0
    for idx, comp in enumerate(target_batch):
        try:
            print(f"[{idx+1}/{len(target_batch)}] Dispatching application to: {comp['name']} ({comp['hr_email']})...")

            msg = MIMEMultipart()
            msg['From'] = f"{CANDIDATE_NAME} <{CANDIDATE_EMAIL}>"
            msg['To'] = comp['hr_email']
            msg['Subject'] = f"Application: Restaurant Assistant Manager / Operations Leader – {CANDIDATE_NAME} (6 Yrs Albaik Leadership)"

            body = build_cover_letter(comp)
            msg.attach(MIMEText(body, 'plain', 'utf-8'))

            # Attach CV
            if os.path.exists(cv_attachment_path):
                with open(cv_attachment_path, "rb") as f:
                    part = MIMEBase("application", "octet-stream")
                    part.set_payload(f.read())
                    encoders.encode_base64(part)
                    part.add_header('Content-Disposition', f'attachment; filename="Md_Hakim_Mia_Official_ATS_CV.html"')
                    msg.attach(part)

            server.send_message(msg)
            print(f"   ✅ [SENT] Successfully delivered to {comp['hr_email']}")
            log_sent_status(comp['id'], comp['name'], comp['hr_email'], "SENT", "Direct SMTP Dispatch")
            success_count += 1

            # Polite rate-limit delay
            time.sleep(4)
        except Exception as e:
            print(f"   ❌ [FAILED] Failed sending to {comp['hr_email']}: {e}")
            log_sent_status(comp['id'], comp['name'], comp['hr_email'], "FAILED", str(e))

    server.quit()
    print(f"\n[SUMMARY] Dispatched {success_count}/{len(target_batch)} applications successfully.")
    print(f"Audit log saved to: {LOG_FILE}\n")
    return True

if __name__ == "__main__":
    app_password = os.environ.get("GMAIL_APP_PASSWORD")

    print("================================================================")
    print("🇮🇪 Md Hakim Mia - Ireland 50-Company Batch Application Dispatcher")
    print("================================================================")

    if not app_password:
        print("\n⚠️ No GMAIL_APP_PASSWORD found in environment.")
        print("You can:")
        print("  Option 1: Open '50_IRISH_COMPANIES_APPLICATION_PORTAL.html' to send via 1-click mailto or apply on career portals without any password.")
        print("  Option 2: Enter your 16-character Google App Password below to send automatically.\n")

        user_input = input("Enter 16-character Gmail App Password (or press Enter to cancel): ").strip()
        if user_input:
            app_password = user_input
        else:
            print("\n[INFO] Exiting batch sender. Use 'OPEN_50_COMPANIES_PORTAL.bat' for web portal applications.")
            sys.exit(0)

    # Prompt batch size
    batch_str = input("How many companies to send in this batch? (Default 5, max 50): ").strip()
    batch_size = int(batch_str) if batch_str.isdigit() else 5

    send_campaign_batch(app_password, batch_size=batch_size)
