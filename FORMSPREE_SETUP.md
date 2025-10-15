# Formspree Setup Instructions

## Steps to Set Up Your Contact Form

1. **Sign up for Formspree**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Create a free account (free tier allows 50 submissions/month)

2. **Create a New Form**
   - Click "New Form" or "Create Form"
   - Give it a name like "Portfolio Contact Form"
   - You'll receive a form endpoint that looks like: `https://formspree.io/f/xyzabc123`

3. **Update Your Code**
   - Open `src/pages/Home.tsx`
   - Find line 349 where it says: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID (e.g., `xyzabc123`)

4. **Test Your Form**
   - Deploy your site or run it locally
   - Fill out the contact form and submit
   - Check your email for the submission
   - Go to your Formspree dashboard to see all submissions

## Features Included

✅ Form submission handling with loading state  
✅ Success message after submission  
✅ Error handling  
✅ Form reset after successful submission  
✅ Disabled inputs while submitting  
✅ Beautiful button states (Sending..., ✓ Sent!, Error - Try Again)

## Email Notifications

By default, Formspree will send submissions to the email associated with your account. You can customize this in your Formspree dashboard settings.

## Optional: Custom Thank You Page

In your Formspree dashboard, you can set up:
- Custom email templates
- Auto-reply emails to form submitters
- Spam filtering
- File uploads (on paid plans)

