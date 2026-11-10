#!/usr/bin/env python3
import unittest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from irish_job_matcher import analyze_job_posting

class TestIrishJobMatcher(unittest.TestCase):
    def test_hospitality_match_with_sponsorship(self):
        res = analyze_job_posting(
            title="Assistant Restaurant Manager",
            company="Supermac's Galway",
            location="Galway, Ireland",
            description="We are seeking an Assistant Manager with HACCP training. Fast food experience is essential. Work permit / visa sponsorship supported."
        )
        self.assertEqual(res["track"], "Hospitality / Operations Leadership")
        self.assertTrue(res["sponsorship_detected"])
        self.assertTrue(res["recommended_for_application"])
        self.assertGreaterEqual(res["match_score"], 60)

    def test_tech_match(self):
        res = analyze_job_posting(
            title="Junior Web Developer / Automation",
            company="Tech Ireland Ltd",
            location="Dublin, Ireland",
            description="Looking for Junior Developer with React, Python and automation skills."
        )
        self.assertEqual(res["track"], "IT & Web Development")
        self.assertIn("python", res["tech_keywords"])

if __name__ == "__main__":
    unittest.main()
