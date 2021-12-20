export default function d1(req, res) {
  const params = req.query.params;
  res.status(200).json(params);
}
