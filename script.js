let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')


//Função Assincrona
async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/fabianaRusso')
        const profile = await dataProfile.json()

        //Concatenação 
        let content = `
        <img src="${profile.avatar_url}" alt="Foto do Perfil do Github" - ${profile.name}>
        <article class="section_content">
            <h1>Who am I?</h1>
            <p>
                I have a degree in systems analysis and development, I am looking for an opportunity and new challenges.
                I'm currently attending the Java FullStack bootcamp at Generation Brasil, the bootcamp lasts for 3 months and there we simulate a job market routine, with a daily shift from 8am to 5pm and I'm developing projects that involve a lot of persistence and teamwork, using the Java language, the SpringBoot framework and DB MySQL for the back-end and Node.js, React for the front-end. 
            </p>

            <div class="section_github flex">
            <a href="${profile.html_url}"><img src="./assets/icons8-github.svg" ></a>
            <p>${profile.followers} followers</p>
            <p>${profile.public_repos} Repositories</p>
        </div> 
        </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()