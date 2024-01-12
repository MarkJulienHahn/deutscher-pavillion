export default (req, res) => {
  // Set CORS headers to allow requests from any origin (you can customize this)
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://cdn.consentmanager.net"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");

  // Your API logic goes here

  // Send the response
  res.status(200).json({ message: "API response" });
};
