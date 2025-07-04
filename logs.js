exports.handler = async (event, context) => {
  const ip = event.headers['x-forwarded-for'] || event.headers['x-real-ip'];
  
  console.log(`IP: ${ip}, Time: ${new Date()}`);
  
  return {
    statusCode: 200,
    body: JSON.stringify({status: 'ok'})
  };
};
