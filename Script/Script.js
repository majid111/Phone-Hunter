const onload = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phone = data.data;
    displayPhone(phone);
    // console.log(phone);
}

const displayPhone = (phones) => {
    const CardContainer=document.getElementById('card-container')
    phones.forEach(phone => {
        console.log(phone.phone_name);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  bg-gray-100 shadow-xl';
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="phones" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary text-white">Show Details</button>
            </div>
        </div>`;

        CardContainer.appendChild(phoneCard);
    });
}

onload();