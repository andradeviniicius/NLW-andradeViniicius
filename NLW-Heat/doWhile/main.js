const links = {
  github: 'andradeviniicius',
  twitter: 'aaaaandrade',
  youtube: 'xurupa',
  facebook: 'AndraudeJapodesair',
  instagram: 'andradeviniicius'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const oldSocial = li.getAttribute

    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${links.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    
    // Minha solucao do mini desafio:

    // var h1 = document.getElementById('userName')
    // h1.innerHTML = data.login

    // Agora eu faria com todos, infelizmente é isso q eu sei, nao é a forma mais performatica mas lembrei do curso do guanabara q ele ensinou dessa maneira
    
    // Solucao dela, bem mais simples e meu deus como vale a participacao desse evento...
    userName.textContent = data.name
    userBio.textContent = data.bio
    githubLink.href = data.html_url
    githubUser.textContent = data.login
    profileImage.src = data.avatar_url

   
  })

  // Quais informacoes que eu preciso?
  //   1- Github user
  //   2- Github Photo
    //  3- Github name

  //Fetch pega a resposta e guarda nele, nao sabe oq é a informacao só tras ela mesmo
  //Pra utilizar a resposta utiliza-se as promises -- .then() -- caso o fetch consiga pegar o retorno o then funciona


  /*
    Arrow function, forma minimizada de criar uma function

    function argumento() {} é igual a:
    argumento => {} 

    Funcao anonima :))

    O unico porém é que para executar a funcao anonima tem de se utilizar tecnicas de JS avançadas, nao da pra apenas escrever nomedafuncao()

  */
}

getGithubProfileInfo()

