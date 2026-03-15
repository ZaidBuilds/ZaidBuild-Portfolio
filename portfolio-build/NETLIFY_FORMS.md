# Netlify Forms – auto-connect on deploy

The contact form is set up so **Netlify automatically connects it to the Forms backend** when you deploy. No manual form setup in the Netlify UI is required for the form to work.

## How it works

1. **Hidden form in `layout.tsx`**  
   A form with `name="contact"` and `data-netlify="true"` is rendered in the root layout (hidden from users). Netlify’s build scans the deployed HTML, finds this form, and registers the **contact** form. That’s the “auto-connect” step.

2. **Visible form in `Contact.tsx`**  
   The form users see and submit has the same `name="contact"` and posts the same fields. Submissions are sent via JavaScript to Netlify; because the form was already registered at deploy, they are accepted and stored in Netlify Forms.

3. **Optional: email notifications**  
   To get submissions at **collab.zaidbuilds@gmail.com**:  
   Netlify Dashboard → **Site configuration** → **Forms** → **Form notifications** → **Add notification** → **Email** → set address and save.

No code changes are needed for the form to work after deploy; only add the email notification if you want inbox alerts.
