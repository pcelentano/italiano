document.addEventListener("DOMContentLoaded", function() {
    // Function to update selected options
    function updateSelectedOptions() {
        const selectedOptions = [];
        document.querySelectorAll('.option.selected').forEach(option => {
            selectedOptions.push(option.querySelector('input[type="checkbox"]').id);
        });
        return selectedOptions;
    }

    // Function to construct query string
    function constructQueryString() {
        return updateSelectedOptions()
            .map(name => `option=${encodeURIComponent(name)}`)
            .join("&");
    }

    // Update selected options when divs are clicked
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener("click", function() {
            this.classList.toggle('selected');
            const queryString = constructQueryString();
            console.log("Selected options:", queryString);
        });
    });

    // Handle "Start Game" button click
    document.getElementById("startGame").addEventListener("click", function() {
        const queryString = constructQueryString();
        console.log("Selected options:", queryString);
        window.location.href = `game.html?${queryString}`;
    });
});