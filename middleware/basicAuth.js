import * as jwt from "json-web-token";

async function basicAuth(req, res, next) {
  const { authorization } = req.headers;
  const bearerToken = authorization?.split(" ")[1];

  if (!bearerToken) {
    return res.redirect("/user/login");
  }

  try {
    const verified = jwt.verify(bearerToken, process.env.SECRET);
    if (verified) {
      res.locals.data.user = verified;
      next();
    } else {
      return res.status(401).json({ error: "Nope!" });
    }
  } catch (error) {
    return res.status(401).json({ error: "Nope!" });
  }
}

export default basicAuth;
