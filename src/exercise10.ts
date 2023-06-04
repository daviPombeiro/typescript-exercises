/**
 * Fetch the API Api/courses.json.
 * Define it's interface and create a Type Guard that guarantees that it has name, hours and tags.
 * Use Type Guards to gurantee the Type Safety of the code.
 * Show the API data on the screen.
 */

interface Course10 {
    "name": String,
    "hours": number,
    "classes": number,
    "free": boolean,
    "tags": string[],
    "idClasses": number[],
    "level": 'beginner' | 'advanced'
}

function isCourse(course: unknown): course is Course10 {
    if (course &&
        typeof course === "object" &&
        "name" in course &&
        "hours" in course &&
        "tags" in course){
        return true;
    }
    return false;
}

async function fetchCourses10() {
    const response = await fetch('../Api/courses.json');
    const data = await response.json();
    showCourses10(data);
}
  
fetchCourses10();
  
function showCourses10(courses: Course10[]) {
    const element = document.getElementById("exercise10");
    if (element && courses instanceof Array) {
        courses.filter(isCourse).forEach(course => {
            element.innerHTML += `
                <div>
                    <h2>${course.name}</h2>
                    <h6>Hours: ${course.hours}</h6>
                    <p style="margin-bottom: 10px">Tags: ${course.tags.join(', ')}</p>
                </div>
            `;
        });
    }
}