export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { description } = req.body;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 1000,
      system: `אתה מומחה שיווק נדל"ן יוקרתי ישראלי. צור קמפיין שיווקי מקצועי.
החזר JSON בלבד ללא markdown:
{
  "headline": "כותרת מרשימה עד 10 מילים",
  "description": "תיאור שיווקי 3-4 משפטים בעברית"
}`,
      messages: [{ role: 'user', content: `תיאור הנכס: ${description}` }]
    })
  });

  const data = await response.json();
  const text = data.content[0].text.replace(/```json|```/g, '').trim();
  const result = JSON.parse(text);
  res.status(200).json(result);
}
