
window.onload = function() {
    fetch('phone_cases_data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${item.Brand} ${item.Model}</strong> - $${item['Price ($)']}<br>${item.Description}`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
};
