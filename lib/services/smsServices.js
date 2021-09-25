const { sendSms } = require('../utils/twilio');
const Quote = require('../models/Quote');
const fetchURL = require('../utils/fetchUtils');

module.exports = class smsService {
  //send a text and store the order
  
  static async createRonQ(body = null) {
    const rQuote = await fetchURL(1);
    const quote = `${body}` ? `${body}` : `${rQuote[0]}`;
    console.log('AHHHHHHH', body);
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      quote
    );
  
    //store the order
   
    const newQuote = await Quote.insert(quote);
    console.log('PLEEEAASSSEE', newQuote);
    
    return newQuote;
  }
  
  static async ronQuotes() {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'Here is a quote!'
    );
        
    //store the order
        
    const ronQuote = await Quote.select();
    return ronQuote;
  }
  
  // static async ronQuote(id) {
  //   //send text
  //   await sendSms(
  //     process.env.ORDER_HANDLER_NUMBER,
  //     `An Order received for ${id}`
  //   );
  
  //   //store the order
   
  
  //   return ;
  // }
};
