const membershipPlans =[
    {
    name:"pass 'trail'",
    price:"$0",
    features:[
        "Access to the gym from 8:00 t0 14:00",
        "The trainer on duty will introduce you to the gym"
    ]
},
{
    name:"pass 'Easy Start'",
    price:"$119",
    features:[
        "Visit without restriction 24/7",
        "Individual training program",
        "Access to the VTRAINER application",
        "Trainer support"
    ]
},
{
    name:"pass 'Free Time'",
    price:"$49",
    features:[
        "The entrance time to the gym is from 14:00 to 16:00",
        "Without suspension of gym membership",
        "The tainer on duty will introduce you to the gym"
    ]
},
{
    name: "Pass '1 Month 24/7'",
    price: "$ 85",
    features: [
        "Visit without restrictions 24/7",
        "The trainer on duty will introduce you to the gym"
    ]
},
{
    name: "Pass 'In Shape (AM)'",
    price: "$ 165",
    features: [
        "Training in mini-groups until 14:00",
        "Without suspension of gym membership",
        "Classes with a trainer in a mini-group 3 times a week",
        "Trainer support"
    ]
},
{
    name: "Pass 'In Shape (PM)'",
    price: "$ 195",
    features: [
        "Training in mini-groups until 17:00",
        "Without suspension of gym membership",
        "Classes with a trainer in a mini-group 3 times a week",
        "Trainer support"
    ]
}
];
//function to render membershipPlans

function renderMembershipPlans(){
    const membershipGrid = document.getElementById('membershipPlans');
    membershipGrid.innerHTML= membershipPlans.map(plan=>`
        <div class="membership-card">
            <h3>${plan.name}</h3>
            <div class="price">${plan.price}</div>
            <ul>
                
                ${
                    plan.features.map(features=>`
                        <li>
                    <img src="/images/icon/check-icon.png" alt="check-icon">
                    <span>${features}</span>
                </li>
               ` ).join('')
                }
                
            </ul>
            <button class="buy-btn">Buy</button>
        </div>
        `).join('')
}
document.addEventListener('DOMContentLoaded',function (){
    renderMembershipPlans();
})