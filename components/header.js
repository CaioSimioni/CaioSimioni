/**
 *  HEADER DO SITE
 * 
    <header>
        <a href="" class="logo"><h1>Caio R. Simioni</h1></a>
        <nav class="main-nav">
            <ul class="nav-links">
                <a href="" class="nav-link"><li>Projetos</li></a>
                <a href="" class="nav-link"><li>Sobre</li></a>
                <a href="" class="nav-link"><li>Contato</li></a>
            </ul>
            <div class="alt-tema">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>
            </div>
        </nav>
    </header>
 */

const body = document.body;

const headerElement = document.createElement('header');
body.appendChild(headerElement);

const a_logoElement = document.createElement('a');
a_logoElement.setAttribute('href', './');
a_logoElement.className = 'logo';
a_logoElement.innerHTML = '<h1>Caio R. Simioni</h1>';
headerElement.appendChild(a_logoElement);

const nav_mainElement = document.createElement('nav');
nav_mainElement.className = 'main-nav';
headerElement.appendChild(nav_mainElement);

const ul_nav_linksElement = document.createElement('ul');
ul_nav_linksElement.className = 'nav-links';
nav_mainElement.appendChild(ul_nav_linksElement);

const a_projetosElement = document.createElement('a');
a_projetosElement.setAttribute('href', './projects/');
a_projetosElement.className = 'nav-link';
a_projetosElement.innerHTML = '<li>Projetos</li>';
ul_nav_linksElement.appendChild(a_projetosElement);

const a_sobreElement = document.createElement('a');
a_sobreElement.setAttribute('href', './');
a_sobreElement.className = 'nav-link';
a_sobreElement.innerHTML = '<li>Sobre</li>';
ul_nav_linksElement.appendChild(a_sobreElement);

const a_contatoElement = document.createElement('a');
a_contatoElement.setAttribute('href', './');
a_contatoElement.className = 'nav-link';
a_contatoElement.innerHTML = '<li>Contato</li>';
ul_nav_linksElement.appendChild(a_contatoElement);

const div_alt_temaElement = document.createElement('div');
div_alt_temaElement.className = 'alt-tema';
div_alt_temaElement.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><rect fill='none' height='24' width='24'/><path d='M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z'/></svg>";
nav_mainElement.appendChild(div_alt_temaElement);

function descobrirPasta(url){
    let new_url = url.substring(0, url.lastIndexOf('/'));
    let p_index = new_url.lastIndexOf('/'), l_index = url.lastIndexOf('/');
    return url.substring(p_index + 1, l_index);
}

if(descobrirPasta(document.location.href) == "projects"){
    a_projetosElement.href = "../";
}else{
    a_projetosElement.href = "./projects/"
}
