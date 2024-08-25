// first ---> 100tk
// 101-200 --->90tk
// 200+ --->70tk
function ticketPrice(ticketQuantity){
const firstTicket=100;
const secondTicket=90;
const thirdTicket=70;
if(ticketQuantity<=100){
    const totalPrice =ticketQuantity*firstTicket;
    return totalPrice;
}
else if(ticketQuantity<=200){
    const firstTicketPrice =100*firstTicket;
    const secondTicketPrice =ticketQuantity-100;
    const totalSecondTicketPrice=secondTicketPrice*secondTicket;
    const totalPrice =firstTicketPrice+totalSecondTicketPrice
    return totalPrice;
}
else{
    const firstTicketPrice =100*firstTicket;
    const secondTicketPrice =100*secondTicket;
    const restTicket =ticketQuantity-200;
    const thirdTicketPrice =restTicket*thirdTicket
    const total = firstTicketPrice+secondTicketPrice+thirdTicketPrice;
    return total;
}
}
const price =ticketPrice(220);
console.log(price);