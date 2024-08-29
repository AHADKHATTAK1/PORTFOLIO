<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove unnecessary whitespace
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Set the recipient email address (replace with your email address)
    $to = "wearsmartii@gmail.com";

    // Create the email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Create the email content
    $email_content = "You have received a new message from your website contact form.\n\n";
    $email_content .= "Here are the details:\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Create email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $email_subject, $email_content, $email_headers)) {
        // Redirect to a thank you page or show a success message
        echo "Thank you! Your message has been sent.";
    } else {
        // Show an error message if the email fails to send
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
}
?>
