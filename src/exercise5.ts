/**
 * Define the "API" interface ../Api/courses.json and show the data
 * 
 * There are only two course leves: beginner and advanced.
 * If it's beginner, paint the title blue; if it's advanced paint it red.
 */

interface Course {
    "name": String,
    "hours": number,
    "classes": number,
    "free": boolean,
    "tags": string[],
    "idClasses": number[],
    "level": 'beginner' | 'advanced'
}

async function fetchCourses() {
    const response = await fetch('../Api/courses.json');
    const data = await response.json();
    showCourses(data);
}
  
fetchCourses();
  
function showCourses(courses: Course[]) {
    const element = document.getElementById("exercise5");
    if (element) {

        courses.forEach(course => {
            element.innerHTML += `
                <div>
                    <h2 style="color: ${course.level === "beginner" ? "blue" : "red"};" >${course.name}</h2>
                    <h6>Hours: ${course.hours}</h6>
                    <p style="margin-bottom: 10px;"># of classes: ${course.classes}</p>
                    <p style="font-weight: bold;">${course.free ? "Free!": "Not free"}</p>
                    <p style="margin-bottom: 10px">Tags: ${course.tags.join(', ')}</p>
                    <p style="margin-bottom: 10px">Classes: ${course.idClasses.join(' | ')}</p>
                </div>
            `;
        });
    }
}