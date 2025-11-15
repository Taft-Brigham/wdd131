const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {

    // 1. Ensure input is not empty
    if (input.value.trim() !== '') {

        // 2. Create elements
        const li = document.createElement('li');
        const deletebutton = document.createElement('button');

        // 3. Populate elements
        li.textContent = input.value;
        deletebutton.textContent = 'X';

        // 4. Add delete functionality
        deletebutton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // 5. Put delete button inside li
        li.appendChild(deletebutton);

        // 6. Add li to the list
        list.appendChild(li);

        // 7. Clear the input
        input.value = '';
    }

    // 8. Restore cursor to input field ALWAYS
    input.focus();
});
