# gestao-pedidos
**Projeto de Processo de Software**
# 📘 README - Regras do Fluxo de Trabalho

## Função:
Ajudar a entender as regras e orientações do trabalho, para que todos possam colaborar melhor e seguir o mesmo caminho durante o desenvolvimento.

# 🔄 Fluxo de Trabalho no GitHub
## 1️⃣ Clonar o repositório (`clone`)

### 🔹 O que é?

Clonar significa **baixar uma cópia do projeto do GitHub para o seu computador**, para você poder trabalhar localmente.

### 💻 Terminal:

   ```
 git clone https://github.com/vitor-motalength/gestao-pedidos.git

  ```

## 2️⃣**Crie uma nova branch para sua tarefa:**
Antes de começar a programar, crie uma branch (ramo) com um nome que identifique o que você vai fazer. Isso separa seu trabalho do código principal e evita conflitos com outras pessoas.

```
git checkout -b tipo/nome-da-tarefa
```

 **Exemplos:**

feat/pagina-login

fix/erro-cadastro

docs/readme

## 3️⃣ **Atualizar o repositório antes de começar (pull)**
 **Objetivo:** Garantir que seu projeto está com a versão mais recente do código.
   Antes de começar a editar qualquer coisa, atualize seu repositório com a versão mais recente da branch principal (`main`):
```
   git checkout main
    git pull origin main
    git checkout tipo/nome-da-tarefa
    git rebase main
```

## 4️⃣ **Criar um Pull Request (`PR`)**
Depois de terminar suas alterações e fazer commit, envie sua branch para o repositório remoto:

```
 git push origin nome-da-sua-branch
```
✅ Etapa 2: Criar o PR

🌐 GitHub Web:

1.Acesse o repositório no GitHub.

2.Clique em "Compare & pull request" (o botão aparece automaticamente).

3.Preencha:

* Título (ex: ✨ feat: adiciona página de login)

* Descrição do que foi feito.

4.Clique em "Create pull request".

## 5️⃣ **Fazer o Merge (merge)**

🔹 O que é?

Merge é o processo de juntar sua branch com a main depois que a Pull Request foi revisada e aprovada.

✅ Após o PR ser aprovado:

🌐 GitHub Web:

1.Acesse a Pull Request.

2.Clique em "Merge pull request".

3.Clique em "Confirm merge".

4.(Opcional) Clique em "Delete branch" para apagar a branch e manter o repositório limpo.

📦 Padrão de Commits
Utilize os prefixos abaixo para manter o histórico de commits claro e organizado:

Emoji| Tipo|Descrição
:----:|:-----:|:----:
✨| feat|Nova funcionalidade
🐛| fix|Correção de bug
♻️|refactor|Refatoração de código
🔥|remove|Remoção de código
📝|docs|Atualização de documentação
✅|test|Adição ou ajuste de testes
🚀|deploy|Preparação/ajuste para produção

Exemplo:
   ```
git commit -m "✨ feat: adiciona tela de login"
 ```












