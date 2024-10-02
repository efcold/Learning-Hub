const categoryContent = {
    content1: '<h1>Module 1</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content2">Next Module</button>',
    content2: '<h1>Module 2</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content3">Next Module</button>',
    content3: '<h1>Module 3</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content4">Next Module</button>',
    content4: '<h1>Module 4</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content5">Next Module</button>',
    content5: '<h1>Module 5</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content6">Next Module</button>',
    content6: '<h1>Module 6</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content7">Next Module</button>',
    content7: '<h1>Module 7</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content8">Next Module</button>',
    content8: '<h1>Module 8</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content9">Next Module</button>',
    content9: '<h1>Module 9</h1><p>Lorem ipsum dolor sit amet...</p> <button class="next-module" data-next="content10">Next Module</button>',
    content10: '<h1>Assessment</h1><p>This is content for Assessment.</p> <button>Submit</button>',
};

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 

        
        const contentType = this.getAttribute('data-content');

       
        const mainContent = document.getElementById('main-content');
        if (categoryContent[contentType]) {
            mainContent.innerHTML = categoryContent[contentType];
            addNextModuleEventListener(); 
        }
    });
});

function setDefaultContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = categoryContent.content1; 
    addNextModuleEventListener(); 
}


function addNextModuleEventListener() {
    document.querySelectorAll('.next-module').forEach(button => {
        button.addEventListener('click', function() {
            const nextContent = this.getAttribute('data-next');
            const mainContent = document.getElementById('main-content');
            if (categoryContent[nextContent]) {
                mainContent.innerHTML = categoryContent[nextContent];
                addNextModuleEventListener(); 
            }
        });
    });
}

// Call the function on page load
window.onload = setDefaultContent;
