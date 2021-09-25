const { sendSms } = require('../utils/twilio');
const Quote = require('../models/Quote');


module.exports = class smsService {
  //send a text and store the order
  
  // static async createRonQ({ quantity }) {
  //   //send text
  //   await sendSms(
  //     process.env.ORDER_HANDLER_NUMBER,
  //     `New Order received for ${quantity}`
  //   );
  
  //   //store the order
    
  
  //   return ;
  // }
  
  static async ronQuotes() {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'Here is a quote!');
        
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
