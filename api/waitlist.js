export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, role, country, message, language } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const body = {
    parent: { database_id: process.env.NOTION_DB },
    properties: {
      Name:     { title:     [{ text: { content: name } }] },
      Email:    { email },
      ...(company  && { Company:  { rich_text: [{ text: { content: company } }] } }),
      ...(role     && { Role:     { select:    { name: role } } }),
      ...(country  && { Country:  { rich_text: [{ text: { content: country } }] } }),
      ...(message  && { Message:  { rich_text: [{ text: { content: message } }] } }),
      Language: { select: { name: (language || 'en').toUpperCase() } },
      Source:   { select: { name: 'Landing page' } },
      Status:   { select: { name: 'New' } },
    },
  };

  const notionRes = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization':  'Bearer ' + process.env.NOTION_TOKEN,
      'Notion-Version': '2022-06-28',
      'Content-Type':   'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!notionRes.ok) {
    const err = await notionRes.text();
    console.error('Notion error:', err);
    return res.status(502).json({ error: 'Failed to save to Notion' });
  }

  return res.status(200).json({ ok: true });
}
