function addPlan(button) {
    const plansGroup = button.parentNode;

    // 새 계획 생성
    const newPlanDiv = document.createElement("div");
    newPlanDiv.className = "plan";
    
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    const newCheckboxId = "plan" + (document.querySelectorAll(".plan input").length + 1);
    newCheckbox.id = newCheckboxId;

    const newLabel = document.createElement("label");
    newLabel.htmlFor = newCheckboxId;
    newLabel.textContent = "새로운 계획";

    // 수정 버튼
    const correctionButton = document.createElement("button");
    correctionButton.className = "correction-btn";
    correctionButton.textContent = "···";
    correctionButton.addEventListener("click", function() {
        editPlan(newLabel, correctionButton);
    });

    newPlanDiv.appendChild(newCheckbox);
    newPlanDiv.appendChild(newLabel);
    newPlanDiv.appendChild(correctionButton);
    plansGroup.appendChild(newPlanDiv);
}

// 계획 텍스트 수정
function editPlan(label, button) {
    const currentText = label.textContent;
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;
    label.replaceWith(inputField);

    // 저장
    button.textContent = "···";
    button.removeEventListener("click", editPlan);
    button.addEventListener("click", function() {
        savePlan(inputField, button);
    });
}

function savePlan(inputField, button) {
    const updatedText = inputField.value;
    const newLabel = document.createElement("label");
    newLabel.textContent = updatedText;
    newLabel.htmlFor = inputField.previousElementSibling.id;
    inputField.replaceWith(newLabel);

    button.textContent = "···";
    button.removeEventListener("click", savePlan);
    button.addEventListener("click", function() {
        editPlan(newLabel, button);
    });
}

function addPlanGroup() {
    const plansContainer = document.querySelector('.plans-container');

    const newPlansGroup = document.createElement("div");
    newPlansGroup.className = "plans-group";

    const addButton = document.createElement("button");
    addButton.className = "add-btn";
    addButton.textContent = "계획 +";
    addButton.addEventListener("click", function() {
        addPlan(addButton);
    });

    newPlansGroup.appendChild(addButton);
    plansContainer.appendChild(newPlansGroup);
}

document.addEventListener("DOMContentLoaded", function() {
    const addBtns = document.querySelectorAll('.add-btn');
    const addPlanBtn = document.querySelector('.add-plan-btn');

    addBtns.forEach(button => {
        button.addEventListener('click', function() {
            addPlan(button);
        });
    });

    addPlanBtn.addEventListener('click', addPlanGroup);
});