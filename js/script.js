customCreateElement = (tag, attribute, attributeValue, parent) => {
    element = document.createElement(tag);
    if(attribute) {
        element.setAttribute(attribute, attributeValue);
    }
    parent.appendChild(element);
    return element;
}

addHeaderTitle = (header) => {
    const headerElement = document.getElementsByTagName("header")[0];
    const container = customCreateElement("div", "id", "title-name", headerElement);
    const title = customCreateElement("h1", "id", "name", container);
    const profession = customCreateElement("p", "id", "profession-title", container);

    title.innerText = header.firstname + "\n" + header.lastname;
    profession.textContent = header.profession;
}

addDetails = (details) => {
    const addressContainer = document.getElementById("address-container");
    const phoneContainer = document.getElementById("phone-container");
    const emailContainer = document.getElementById("email-container");
    const birthContainer = document.getElementById("birth-container");
    const githubContainer = document.getElementById("github-container");
    const emailMailto = document.getElementById("mailto-email");
    const githubURL = document.getElementById("github-url");
 
    let addressInfo = customCreateElement("p", "", "", addressContainer);
    let phoneNumberDesk = customCreateElement("p", "id", "tel-desktop", phoneContainer);
    let phoneNumberMobile = customCreateElement("a", "id", "tel-mobile", phoneContainer);
    let emailInfo = customCreateElement("p", "", "", emailContainer);
    let birthInfo = customCreateElement("p", "", "", birthContainer);
    let githubInfo = customCreateElement("p", "", "", githubContainer);

    addressInfo.innerText = details.address.street + "\n" + details.address.city + "\n" + details.address.country;
    phoneNumberDesk.textContent = details.phone;
    phoneNumberMobile.setAttribute("href", "Tel:" + details.phone);
    phoneNumberMobile.textContent = details.phone;
    emailMailto.setAttribute("href", "mailto:" + details.email); 
    emailInfo.textContent = details.email;
    birthInfo.innerText = details.birth.date + "\n" + details.birth.city;
    githubInfo.innerText = details.github.title;
    githubURL.setAttribute("href", details.github.url);
}

addCompetence = (competences) => {

    const container = document.getElementById("competence");
    const ul = customCreateElement("ul", "", "", container);

    competences.forEach(competence => {
        const li = customCreateElement("li", "", "", ul);
        let title = customCreateElement("p", "", "", li);
        const bar = customCreateElement("div", "class", "bar", li);
        const progress = customCreateElement("div", "class", "progress", bar);

        title.textContent = competence.title;
        progress.style.width = competence.percentage;
    });
}

addLanguage = (languages) => {

    const container = document.getElementById("languages");
    const ul = customCreateElement("ul", "", "", container);

    languages.forEach(languages => {
        const li = customCreateElement("li", "", "", ul);
        let title = customCreateElement("p", "", "", li);
        const bar = customCreateElement("div", "class", "bar", li);
        const progress = customCreateElement("div", "class", "progress", bar);

        title.textContent = languages.title;
        progress.style.width = languages.percentage;
    });
}

addProfile = (profile) => {
    const container = document.getElementById("profile");
    const article = customCreateElement("article", "id", "profile-description", container);
    const paragraph = customCreateElement("p", "", "", article);

    paragraph.textContent = profile;
}

addWorkExperience = (workExperiences) => {
    const container = document.getElementById("work-experiences");
    const ul = customCreateElement("ul", "id", "job-list", container);

    for(const workExperience of workExperiences ) {
        const li = customCreateElement("li", "", "", ul);
        let title = customCreateElement("h3", "class", "job-title", li);
        const cityContainer = customCreateElement("div", "class", "job-city", li);
        const cityParagraph = customCreateElement("p", "", "", cityContainer);
        const jobDuration = customCreateElement("p", "class", "job-duration", li);
        const descriptionList = customCreateElement("ul", "class", "job-description", li);

        title.textContent = workExperience.title;
        cityParagraph.textContent = workExperience.city;
        jobDuration.textContent = workExperience.duration;

        for(const description of workExperience.descriptions) {
            const descriptionLi = customCreateElement("li", "", "", descriptionList);
            const bulletContainer = customCreateElement("div", "class", "list-bullet", descriptionLi);
            const bulletItem = customCreateElement("i", "class", "fas", bulletContainer);
            bulletItem.classList.add("fa-circle");
            let descPara = customCreateElement("p", "", "", descriptionLi);
            descPara.textContent = description.text;
        }
    }
}

addEducation = (educations) => {
    const container = document.getElementById("education");
    const educationUl = customCreateElement("ul", "id", "education-list", container);

    for(const education of educations) {
        const li = customCreateElement("li", "", "", educationUl);
        const title = customCreateElement("h3", "class", "education-school", li);
        const cityContainer  = customCreateElement("div", "class", "education-city", li);
        const cityParagraph = customCreateElement("p", "", "", cityContainer);
        const duration = customCreateElement("p", "class", "education-duration", li);

        title.textContent = education.title;
        cityParagraph.textContent = education.city;
        duration.textContent = education.duration;
    }
}

fetch("./json/data.json")
.then((response) => {return response.json();})
.then((jsonData) => {
    console.log(jsonData);
    addHeaderTitle(jsonData.header);
    addDetails(jsonData.details);
    addCompetence(jsonData.competences);
    addLanguage(jsonData.languages);
    addWorkExperience(jsonData.workExperiences);
    addProfile(jsonData.profile);
    addEducation(jsonData.educations)
});