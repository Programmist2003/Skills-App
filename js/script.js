document.addEventListener('DOMContentLoaded', function() {
    const skills = [
       { name: 'Photography', lesson: 'Learn the basics of photography.' },
       { name: 'Cooking', lesson: 'Discover the art of cooking.' },
       { name: 'Music', lesson: 'Master the basics of music theory.' },
        {name: 'Programer', lesson: 'Haydi Ho on youtube.'},
        {name: 'Mechanical', lesson: 'course on mechanical college.'},
        {name: 'Pain', lesson: 'How to paint like a master.'},
        {name: 'Runner', lesson: 'How basic runner'},
        {name: 'Swim', lesson:'The basics of swimming'},
    ];
   
    const skillsSection = document.getElementById('skills');
    skills.forEach(skill => {
       const skillDiv = document.createElement('div');
       skillDiv.classList.add('skill');
       skillDiv.textContent = skill.name;
       skillDiv.addEventListener('click', function() {
         document.getElementById('lesson').textContent = skill.lesson;
       });
       skillsSection.appendChild(skillDiv);
    });
   });