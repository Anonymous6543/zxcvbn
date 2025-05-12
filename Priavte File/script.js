document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = [
        document.getElementById('check'),
        document.getElementById('check1'), 
        document.getElementById('check2')
    ];
    
    // Track selected checkboxes
    let selected = [checkboxes[0], checkboxes[1]];
    checkboxes[0].checked = true;
    checkboxes[1].checked = true;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Add to selected if not already there
                if (!selected.includes(this)) {
                    selected.push(this);
                }
                
                // If more than two selected, deselect the first one
                if (selected.length > 2) {
                    const firstSelected = selected.shift();
                    firstSelected.checked = false;
                }
            } else {
                // Remove from selected
                selected = selected.filter(cb => cb !== this);
                
                // Find and select an unselected checkbox
                const unselected = checkboxes.find(cb => !cb.checked && cb !== this);
                if (unselected) {
                    unselected.checked = true;
                    selected.push(unselected);
                }
            }
        });
    });
});