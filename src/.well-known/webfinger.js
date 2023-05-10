export default async function handler(req, res) {
    const redirectMap = [
        'david@dhuynh.ca',
        'ada@dhuynh.ca',
        'tin@dhuynh.ca',
        'anh@dhuynh.ca',
      ];
    const resourceKey = req.resource;
    const email = resourceKey.replace("acct:", "");
    if (redirectMap.includes(email)) {
        const jsonData = '{"subject":"acct:' + email + '","links":[{"rel":"http://openid.net/specs/connect/1.0/issuer","type":"text/html","href":"https://auth.dhuynh.ca"}]}';
        res.json(jsonData);
    } else {
        res.status(400)
    }
    
}