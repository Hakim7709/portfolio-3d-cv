#!/usr/bin/env python3
"""
Targeted Job Application Email Dispatcher
Author: Md Hakim Mia Job Suite

Safely prepares and dispatches personalized emails to verified hiring contacts or HR emails.
"""

import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

CANDIDATE_NAME = "Md Hakim Mia"
CANDIDATE_EMAIL = "mdhakimmia.me@gmail.com"
CANDIDATE_PHONE = "+966570457976"

def create_application_email(
    to_email: str,
    company_name: str,
    position_title: str,
    cover_letter_body: str,
    cv_attachment_path: str = None
) -> MIMEMultipart:
    msg = MIMEMultipart()
    msg['From'] = f"{CANDIDATE_NAME} <{CANDIDATE_EMAIL}>"
    msg['To'] = to_email
    msg['Subject'] = f"Application: {position_title} – {CANDIDATE_NAME} (6 Yrs Albaik Leadership & IT)"

    formatted_body = f"""Dear Hiring Team at {company_name},

{cover_letter_body}

Sincerely,

{CANDIDATE_NAME}
Restaurant Assistant Coach | Full-Stack Developer
WhatsApp / Phone: {CANDIDATE_PHONE}
Email: {CANDIDATE_EMAIL}
GitHub: https://github.com/Hakim7709
"""
    msg.attach(MIMEText(formatted_body, 'plain'))

    if cv_attachment_path and os.path.exists(cv_attachment_path):
        with open(cv_attachment_path, "rb") as attachment:
            part = MIMEBase("application", "octet-stream")
            part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header(
                "Content-Disposition",
                f"attachment; filename=Md_Hakim_Mia_CV.pdf"
            )
            msg.attach(part)

    return msg

def save_email_draft(msg: MIMEMultipart, output_filename: str = "draft_application.eml"):
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(msg.as_string())
    print(f"[OK] Email draft saved locally to {output_filename}")

if __name__ == "__main__":
    test_msg = create_application_email(
        to_email="hr@example-irish-hospitality.ie",
        company_name="Irish Hospitality Group",
        position_title="Restaurant Assistant Manager",
        cover_letter_body="Please find attached my CV for the Assistant Manager position. With 6 years at Albaik and strong operational & technical leadership, I am eager to contribute to your team."
    )
    save_email_draft(test_msg, "sample_application_draft.eml")

