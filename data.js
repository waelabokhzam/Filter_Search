document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("dropdownInput");
  const dropdownList = document.getElementById("dropdownList");

  // Sample list of items to populate the dropdown
  const items = [
      "Apple", "Banana", "Cherry", "Date", "Elderberry", 
      "Fig", "Grape", "Honeydew", "Ivy Gourd", "Jackfruit"
  ];

  // Function to filter the dropdown based on the input
  function filterDropdown(value) {
      // Clear the previous list
      dropdownList.innerHTML = "";

      // Filter items based on the input value
      const filteredItems = items.filter(item => 
          item.toLowerCase().includes(value.toLowerCase())
      );

      // If there are filtered items, display them in the dropdown
      if (filteredItems.length > 0) {
          dropdownList.style.display = "block";
          filteredItems.forEach(item => {
              const li = document.createElement("li");
              li.textContent = item;
              li.addEventListener("click", () => {
                  input.value = item;
                  dropdownList.style.display = "none"; // Hide dropdown after selection
              });
              dropdownList.appendChild(li);
          });
      } else {
          dropdownList.style.display = "none"; // Hide dropdown if no items match
      }
  }

  // Event listener for input changes
  input.addEventListener("input", function() {
      const value = input.value;
      filterDropdown(value);
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function(event) {
      if (!event.target.closest(".dropdown-container")) {
          dropdownList.style.display = "none";
      }
  });

  // Open dropdown on input click
  input.addEventListener("click", function() {
      dropdownList.style.display = "block";
      filterDropdown(input.value); // Filter items based on current input value
  });
});
