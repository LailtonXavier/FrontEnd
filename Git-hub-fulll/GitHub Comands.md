	Git e GitHub

- isso é um versionamento de codigo, é ter o controle de tudo.
--- por exe: ele pode voltar a uma versão do codigo

--- cmd:
- (definindo nome do git): git config --global user.name "Lailton Xavier" 
- (definir email)	 : git config --global user.email "lailtonxavier123@gmail.com"  	
- (qual editor usando_	 : git config --global core.editor vsc
- (ler o nome cadstrado) : git config --global user.name
- (ler o email cadstrado): git config --global user.email
- (ver tds informações)	 : git config --list

	- Criar nosso primeiro repositorio -

### 		comandos basicos:
	- cd    (entra)
	- dir ou tree /f (mostra uma arvore, n use esse)
	- cd .. (voltar) 
	- mkdir nomePasta
	- cls 	(limpar)

- (iniciar repositorio) : git init	( ele criou uma pasta .grit ) comunicar gitHub

.

### 		branch, Redme, Commit

--- branch : são verções diferente do sistema
	- master : seria a branch pricipal
--- Commt  : enviar para o repositorio, fez alguma modificação pode mandar
	- vem acompanhado de um comentario
--- Readme : um arquivo que todo programador vai ler, instruções de como usar e tal  

- (varrer, ver oq add) : git status
- (vai adicionar  git) : git add README.md
ou
- (pg arq n crackados) : git add -A
- (enviar com commit)  : git commit -m "mensagem"
- (ver tds commits)    : git log

.

### 		Revertendo modificações, voltar para oq era antes (branch)  -  

- (ver tds commits)   : git log 			(so repetindo msm)
- (listar tds branch) : git branch 			( oq estiler com "*" asteristico é o nosso)

- (adc tds arquvs)    : git add -A 			(vai adc tds "repetindo o comando")
ou 
- (arqv especifico )  : git add -A index.html 		(vai adicionar so index.html)
- (add e commit junto): git commit -am "mensagem"

------ git reset -soft, -mixed e -hard  ( esse comando e mais o ID do commit que vc quer voltar pra ele)

- git reset --soft  : (ele volta mais deixa o anterior salvo sem commit, voltar ao estados antes do commit)
- git reset --mixed : (ele é parecido, a direfença é que ele n volta pro add, vc tera que fazer o add)


###		Trabalhando com diferentes Branches
	( dentro do branch temo um historico, se criar novo branch a partir de agora o novo Brach vai assumir o 
	 estado atual e vai começar um historico a partir dai )
	( Com isso podemos manter versões diferentes em branchs diferente )

- (criar novo branch) : git branch nomedobranch		( seria tipo uma novo funcionalidade antes d passar pro Master )
- (trocar de branch ) : git checkout nomedobranch
- git reset --hard  : (ele volta ignorando geral) - (com --hard ele apaga geral)


###		Diferença entre arquivos
	(Saber a diferença o que esta commitado e o que esta no pc?,saber o que foi alterado e oq esta la.)
	(com git diff coseguimos ver o que foi mudado)

- (mostra oq aconteceu) : git diff		( muito util, detalha o que foi feito)
	( se remover tudo do arqv ele mostra oq foi apagado tbm )

- (mostra o nome da pasta modificado) : git diff --name-only
- (expecificar em qual foi alterado)  : git diff style.css
- (escolher o arqv q quero voltar  ) : git checkout HEAD -- style.css  (o arquivo que n quero deixar as alteração)
- (voltar alguma verção que vc fez )   : git checkout  ( volatar a um branch, commit, ou arquivo especifico)


		GITHUT SITE 1:30 minutos

--	No repositorio

-  depois de vc usar o "remote" para vincular
- git remote -v
	- fetch = capacidade que tenho para pegar o conteudo q esta no repositirio remoto para local
		( da um "fetch" pra pegar no repositorio meu)
	- push  =  levar as coisas do repositorio local para o remoto
- git push -u origin main	( push = enviar, -u = complemento do comando, origin = destino, main = nosso branch)

-

		No github

- git commit -am "mensagm"	para enviar para o github 	(vc fez o comite no local)
- git add -A			ele add todos
- git push origin master	agora ele envia pro servidor github


	- ignorar aquivo

- nome do arquivo.formato 	ele ignora
- *.txt			qualquer arquivo que tenha .txt ele vai ignorar
- *.sql			ignorando qualquer arquivo sql
- pasta/* - pasta/	tds que tiver na pasta, ou a propria pasta


		Revertendo sem perder o código
	- git revert	
	( vai coltar comitando e vc tem acesso ao commit q fez errado) "o salvador das sextas-feiras"

- git log	pega o codigo do commit que fez problemas
- git revert --no-edit  codigo	    	( vai voltar o commit anterioe )	
		- no edit = ele abri seu editor com as alterações se vc quiser salvar ou alterar novamente
		muito bom esse comando

		
		Deletando branches locais e remotos

- git checkout teste		ir para o branch teste ee os arquivos tbm mostra isso
- git push origin teste		envia o novo branch 

-git push origin :teste		remover o branch remoto ( os dois pontos : deletar )



		Contribuindo com outros repositórios (fork / pul request)

	vai no projeto e aperta em "Fork" e aparecera em seu git dai vc pode clonar 

- depois que clonou vc pode modificar, dar um git add, commit, um git remote -v pra ver o caminho e por fim
	um push
- vai no site original em "new pull request"
- clica em "create pull request" 

 descartar as mudanças local 
- git -r -f remote/branch





https://www.youtube.com/watch?v=OuOb1_qADBQ  36:24

