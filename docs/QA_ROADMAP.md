# Roadmap de QA — Passo a Passo Completo
### Plataforma Adventist Groei

> **Para quem é este guia?** Para qualquer pessoa fazer o QA completo da plataforma partindo do zero — banco de dados vazio, apenas uma conta de administrador. Siga os passos na ordem. Cada passo depende do anterior.

---

## Antes de começar

### Pré-requisitos

1. **Resetar o banco de dados** (rode no terminal, dentro da pasta `api-adventistgroei.nl`):
   ```bash
   pnpm dev:reset
   ```
   Isso apaga tudo, roda as migrations e cria a estrutura inicial.

2. **Iniciar a API** (se não iniciou automaticamente):
   ```bash
   pnpm start:dev
   ```

3. **Iniciar o frontend** (na pasta `adventistgroei.nl`):
   ```bash
   pnpm dev
   ```

4. **Abrir o navegador** em `http://localhost:3000`

### Seu ponto de partida
Após o reset, você tem:
- **1 conta de administrador**: `admin@mail.com` / `123123`
- **1 instituição** já criada (pelo seed de estrutura)
- Todo o resto **vazio**

---

## MÓDULO 1 — Configurar a Estrutura da Instituição

> **Objetivo:** Criar a hierarquia completa antes de qualquer outra coisa.
> **Quem faz:** Administrador

---

### PASSO 1.1 — Fazer login como Administrador

1. Acesse `http://localhost:3000/login`
2. E-mail: `admin@mail.com`
3. Senha: `123123`
4. Clique em **Entrar**
5. ✅ **Verificar:** Dashboard carrega sem erros

---

### PASSO 1.2 — Verificar a Instituição existente

1. No menu lateral, clique em **Institutions**
   → URL: `/institutions`
2. ✅ **Verificar:** Aparece 1 instituição listada (criada pelo seed)
3. Clique na instituição para abrir os detalhes
4. ✅ **Verificar:** Página de detalhes carrega com os dados da instituição
5. Clique em **Edit** (ou no ícone de lápis)
6. Altere o nome para algo descritivo (ex: `Adventist Church - Netherlands`)
7. Clique em **Save**
8. ✅ **Verificar:** Nome atualizado na listagem

---

### PASSO 1.3 — Criar uma Região

1. No menu lateral, clique em **Regions**
   → URL: `/regions`
2. ✅ **Verificar:** Lista de regiões está **vazia**
3. Clique em **New Region** (ou `+`)
4. Preencha:
   - **Name:** `North Region`
   - **Color:** Escolha uma cor
5. Clique em **Save**
6. ✅ **Verificar:** Região aparece na lista

**Repita e crie mais uma região:**
- **Name:** `South Region`
- ✅ **Verificar:** Agora há 2 regiões

---

### PASSO 1.4 — Criar uma Igreja

1. No menu lateral, clique em **Churches**
   → URL: `/churches`
2. ✅ **Verificar:** Lista de igrejas está **vazia**
3. Clique em **New Church** (ou `+`)
4. Preencha:
   - **Name:** `Amsterdam Central Church`
   - **Region:** Selecione `North Region`
   - **Type:** Selecione um tipo (ex: `CHURCH`)
5. Clique em **Save**
6. ✅ **Verificar:** Igreja aparece na lista

**Repita e crie mais uma:**
- **Name:** `Rotterdam Church`
- **Region:** `South Region`
- ✅ **Verificar:** Agora há 2 igrejas

---

### PASSO 1.5 — Criar Departamentos Institucionais

1. No menu lateral, clique em **Institutional Departments**
   → URL: `/institutional-departments`
2. ✅ **Verificar:** Lista está vazia (ou tem 1 do seed)
3. Clique em **New Department**
4. Preencha:
   - **Name:** `Youth Ministry`
   - **Institution:** Selecione a instituição criada
   - (Não vincule a nenhuma church — este é um departamento institucional)
5. Clique em **Save**
6. ✅ **Verificar:** Departamento aparece

**Crie mais um:**
- **Name:** `Finance Department`
- ✅ **Verificar:** 2 departamentos institucionais

---

### PASSO 1.6 — Criar Departamentos de Igreja

1. No menu lateral, clique em **Church Departments**
   → URL: `/church-departments`
2. Clique em **New Department**
3. Preencha:
   - **Name:** `Worship Team`
   - **Church:** Selecione `Amsterdam Central Church`
4. Clique em **Save**
5. ✅ **Verificar:** Departamento de igreja criado

---

## MÓDULO 2 — Criar e Convidar Usuários

> **Objetivo:** Criar todos os perfis de usuário necessários para testar os diferentes níveis de acesso.
> **Quem faz:** Administrador

---

### PASSO 2.1 — Verificar a Página de Usuários

1. No menu lateral, clique em **Users**
   → URL: `/users`
2. ✅ **Verificar:** Apenas o próprio administrador aparece na lista

---

### PASSO 2.2 — Criar o Gerente Financeiro

1. Clique em **Invite User** (ou `+ New User`)
2. Preencha:
   - **Name:** `Finance Manager`
   - **Email:** `finance@teste.com`
   - **Role:** `Financial Manager`
3. Clique em **Send Invite** ou **Create**
4. ✅ **Verificar:** Usuário aparece na lista

> 💡 O sistema gera um link de convite. Para testes locais, você pode usar o link diretamente sem e-mail.

---

### PASSO 2.3 — Criar o Líder Institucional

1. Clique em **Invite User**
2. Preencha:
   - **Name:** `Institutional Leader`
   - **Email:** `instleader@teste.com`
   - **Role:** `Institutional Leader`
   - **Department:** `Youth Ministry`
3. ✅ **Verificar:** Usuário criado

---

### PASSO 2.4 — Criar o Líder de Igreja

1. Clique em **Invite User**
2. Preencha:
   - **Name:** `Church Leader`
   - **Email:** `churchleader@teste.com`
   - **Role:** `Church Leader`
   - **Church:** `Amsterdam Central Church`
4. ✅ **Verificar:** Usuário criado

> ⚠️ **Importante:** Após criar o líder de igreja, volte em **Churches** e edite `Amsterdam Central Church` para atribuir este usuário como **Leader** da igreja.

---

### PASSO 2.5 — Criar o Líder de Departamento de Igreja

1. Clique em **Invite User**
2. Preencha:
   - **Name:** `Dept Church Leader`
   - **Email:** `deptchurchleader@teste.com`
   - **Role:** `Church Department Leader`
   - **Department:** `Worship Team`
   - **Church:** `Amsterdam Central Church`
3. ✅ **Verificar:** Usuário criado

---

### PASSO 2.6 — Criar o Membro de Igreja (Pregador)

1. Clique em **Invite User**
2. Preencha:
   - **Name:** `Preacher Member`
   - **Email:** `preacher@teste.com`
   - **Role:** `Church Member`
   - **Church:** `Amsterdam Central Church`
3. ✅ **Verificar:** Usuário criado

**Crie mais um membro para a segunda igreja:**
- **Name:** `Rotterdam Member`
- **Email:** `rotterdam@teste.com`
- **Role:** `Church Member`
- **Church:** `Rotterdam Church`
- ✅ **Verificar:** 2 membros de igreja

---

### PASSO 2.7 — Criar um Role Customizado

1. No menu lateral, clique em **Access** → **Roles**
   → URL: `/access/roles`
2. ✅ **Verificar:** Aparecem os roles padrão do sistema (Admin, Financial Manager, etc.)
3. Clique em **New Role**
4. Preencha:
   - **Name:** `Administrative Assistant`
   - **Description:** `Limited access for administrative support`
5. Na seção de permissões, marque:
   - `users` (listar usuários)
   - `user` (ver usuário)
   - `institutions` (listar instituições)
6. Clique em **Save**
7. ✅ **Verificar:** Role customizado aparece na lista
8. Clique no role criado para ver os detalhes
9. ✅ **Verificar:** As 3 permissões aparecem listadas

---

### PASSO 2.8 — Atribuir Role Customizado a um Usuário Existente

1. Vá em **Users** → clique em `Institutional Leader`
2. Na seção de Roles, clique em **Add Role**
3. Selecione `Administrative Assistant`
4. ✅ **Verificar:** O usuário agora tem 2 roles (Institutional Leader + Administrative Assistant)

---

### PASSO 2.9 — Verificar Acesso por Nível

Faça logout e teste cada usuário:

| Usuário | Deve conseguir | Não deve conseguir |
|---|---|---|
| `finance@teste.com` | Ver orçamentos, aprovar subsídios | Criar igrejas |
| `instleader@teste.com` | Criar/editar igrejas e departamentos | Excluir outros admins |
| `churchleader@teste.com` | Editar própria igreja, criar departamentos | Editar outras igrejas |
| `preacher@teste.com` | Ver disponibilidade própria, pedir vagas | Ver orçamentos |

---

## MÓDULO 3 — Orçamentos Anuais

> **Objetivo:** Criar e aprovar orçamentos para a instituição e departamentos.
> **Quem faz:** Administrador e Gerente Financeiro

---

### PASSO 3.1 — Criar Orçamento Institucional

1. **Faça login como Admin** (`admin@mail.com`)
2. No menu lateral, vá em **Finance** → **Annual Budget**
   → URL: `/finance/annual-budget`
3. ✅ **Verificar:** Nenhum orçamento existe ainda
4. Clique em **New Budget** → selecione **Institution Budget**
5. Preencha:
   - **Institution:** Selecione a sua instituição
   - **Year:** Ano atual (ex: `2026`)
   - **Planned Budget:** `50000` (€50.000)
   - **Description:** `Annual institutional budget 2026`
6. Clique em **Save**
7. ✅ **Verificar:** Orçamento aparece com status `DRAFT` e balance `€50.000`

---

### PASSO 3.2 — Criar Orçamento de Departamento

1. Ainda na tela de orçamentos, clique em **New Budget** → **Department Budget**
2. Preencha:
   - **Department:** `Youth Ministry`
   - **Year:** Ano atual
   - **Planned Budget:** `10000` (€10.000)
3. Clique em **Save**
4. ✅ **Verificar:** Segundo orçamento criado com status `DRAFT`

**Repita para `Finance Department`:**
- **Planned Budget:** `5000` (€5.000)
- ✅ **Verificar:** Agora há 3 orçamentos no total

---

### PASSO 3.3 — Aprovar os Orçamentos

1. Clique no orçamento institucional de `€50.000`
2. Clique em **Approve**
3. Informe o **Approved Amount:** `50000`
4. Clique em **Confirm**
5. ✅ **Verificar:** Status muda para `APPROVED`

**Repita para os orçamentos de departamento.**
✅ **Verificar:** Todos os 3 orçamentos estão `APPROVED`

---

### PASSO 3.4 — Testar Rejeição de Orçamento

1. Crie um **4º orçamento** de departamento temporário (ex: €1.000)
2. Clique em **Reject**
3. Informe um **motivo**: `Budget too high for this period`
4. ✅ **Verificar:** Status muda para `REJECTED`, motivo salvo
5. Delete este orçamento rejeitado (botão **Delete**)
6. ✅ **Verificar:** Orçamento removido da lista

---

### PASSO 3.5 — Travar o Orçamento

1. Clique no orçamento de `€50.000`
2. Clique em **Lock Budget** (cadeado)
3. ✅ **Verificar:** Um ícone de cadeado aparece, o botão de edição some
4. Clique novamente em **Lock Budget** para desbloquear
5. ✅ **Verificar:** Botão de edição volta

---

### PASSO 3.6 — Verificar os KPIs Financeiros

1. Ainda na tela de Annual Budget, veja os cards de KPI
2. ✅ **Verificar:**
   - Total Budget: `€65.000` (soma dos 3 aprovados)
   - Total Spent: `€0` (ainda sem subsídios aprovados)
   - Remaining: `€65.000`
3. ✅ **Verificar:** Os gráficos de `Department Spending` e `Spending Over Time` carregam (ainda zerados)

---

## MÓDULO 4 — Projetos e Atividades

> **Objetivo:** Criar projetos, adicionar atividades e gerenciar equipes.
> **Quem faz:** Líder Institucional, Líder de Departamento, Dono do Projeto

---

### PASSO 4.1 — Criar um Projeto

1. **Faça login como Admin** (ou `instleader@teste.com`)
2. No menu lateral, clique em **Projects**
   → URL: `/projects`
3. ✅ **Verificar:** Nenhum projeto existe
4. Clique em **New Project**
   → URL: `/projects/new-project`
5. Preencha:
   - **Name:** `Community Evangelism 2026`
   - **Department:** `Youth Ministry`
   - **Description:** `Annual evangelism project for the North Region`
   - **Start Date:** 1ª data do mês atual
   - **End Date:** 3 meses à frente
   - **Budget:** `8000` (€8.000)
6. Clique em **Create Project**
7. ✅ **Verificar:** Projeto criado, redirecionado para a página de detalhes (`/projects/[id]`)

---

### PASSO 4.2 — Adicionar Voluntários ao Projeto

1. Na página do projeto, localize a seção **Volunteers** ou **Team**
2. Clique em **Add Volunteer**
3. Selecione `Preacher Member` (`preacher@teste.com`)
4. ✅ **Verificar:** Voluntário aparece na lista de colaboradores
5. **Adicione mais um:** `Church Leader` (`churchleader@teste.com`)
6. ✅ **Verificar:** 2 colaboradores listados

---

### PASSO 4.3 — Atribuir Co-Owner ao Projeto

1. Na página do projeto, localize **Co-Owner**
2. Clique em **Set Co-Owner**
3. Selecione `Institutional Leader` (`instleader@teste.com`)
4. ✅ **Verificar:** Co-owner aparece no cabeçalho do projeto

---

### PASSO 4.4 — Criar Atividades no Projeto

1. Na página do projeto, vá para a seção **Activities**
2. Clique em **Add Activity**
3. Preencha a **Atividade 1:**
   - **Title:** `Prepare marketing materials`
   - **Status:** `TODO`
   - **Budget:** `500`
   - **Deadline:** 2 semanas a partir de hoje
   - **Assignees:** Selecione `Preacher Member`
4. Clique em **Save**
5. ✅ **Verificar:** Atividade aparece no kanban/lista em `TODO`

**Crie a Atividade 2:**
- **Title:** `Train volunteer team`
- **Budget:** `300`
- **Status:** `TODO`
- ✅ **Verificar:** 2 atividades criadas

**Crie a Atividade 3:**
- **Title:** `Purchase printed materials`
- **Budget:** `1200`
- **Status:** `TODO`
- ✅ **Verificar:** 3 atividades, budget total de €2.000

---

### PASSO 4.5 — Mudar Status das Atividades

1. Clique na **Atividade 1** (`Prepare marketing materials`)
2. Mude o status para **IN PROGRESS**
3. ✅ **Verificar:** Status atualizado, log de auditoria gerado
4. Mude para **COMPLETED**
5. ✅ **Verificar:** Atividade marcada como concluída

---

### PASSO 4.6 — Fazer Upload de Documento em uma Atividade

1. Abra a **Atividade 3** (`Purchase printed materials`)
2. Clique em **Upload Document** (ou ícone de clipe)
3. Selecione um arquivo PDF ou imagem do seu computador
4. ✅ **Verificar:** Documento aparece na lista de documentos da atividade
5. Clique em **Download** no documento
6. ✅ **Verificar:** Arquivo é baixado corretamente
7. Clique em **Validate Document** (marcar como aceito)
8. ✅ **Verificar:** Documento marcado como validado

---

### PASSO 4.7 — Adicionar Comentário no Histórico do Projeto

1. Na página do projeto, clique na aba **History** (ou Timeline)
2. Digite um comentário: `Project is progressing well. Materials approved.`
3. Clique em **Post**
4. ✅ **Verificar:** Comentário aparece no histórico com data e autor

---

### PASSO 4.8 — Criar um Ajuste no Projeto

1. Na página do projeto, clique em **Adjustments**
2. Clique em **New Adjustment**
3. Preencha:
   - **Comment:** `Need to add 2 more training sessions`
   - Adicione uma **Task:** `Schedule extra training - Week 3`
   - Adicione outra **Task:** `Schedule extra training - Week 4`
4. Clique em **Create**
5. ✅ **Verificar:** Ajuste criado, colaboradores recebem notificação no sino 🔔
6. Clique em uma das tasks e marque como **Completed**
7. ✅ **Verificar:** Task marcada com check
8. Mude o status do ajuste para **IN PROGRESS**
9. ✅ **Verificar:** Status atualizado
10. Mude para **CLOSED**
11. ✅ **Verificar:** Ajuste fechado

---

### PASSO 4.9 — Verificar KPIs do Projeto

1. Na página do projeto, clique na aba **KPIs** (ou volte para `/projects`)
2. ✅ **Verificar:**
   - Budget do projeto: `€8.000`
   - Activities: `3` (1 completed, 2 todo)
   - Spent: `€0` (ainda sem subsídios aprovados)

---

## MÓDULO 5 — Pedidos de Subsídio

> **Objetivo:** Criar, submeter e aprovar pedidos de subsídio, verificando o impacto no orçamento.
> **Quem faz:** Líder de Departamento (cria) + Gerente Financeiro (aprova)

---

### PASSO 5.1 — Criar as Colunas de Status de Subsídio

1. No menu lateral, vá em **Finance** → **Subsidy Request** (ou diretamente em **Subsidies**)
   → URL: `/subsidies`
2. ✅ **Verificar:** Página carrega sem erros (lista de pedidos vazia)
3. Procure por **Manage Statuses** ou **Settings**
4. ✅ **Verificar:** Colunas padrão existem (ex: `Pending`, `In Review`, `Approved`, `Rejected`)

> 💡 As colunas do kanban são os `SubsidyStatus`. Eles podem já existir pelo seed ou precisar ser criados.

---

### PASSO 5.2 — Criar um Pedido de Subsídio Normal

1. Clique em **New Subsidy Request** (ou `+`)
   → URL: `/subsidies/new`
2. Preencha:
   - **Project:** `Community Evangelism 2026`
   - **Request Type:** `NORMAL` (com documentos)
   - **Department:** `Youth Ministry`
3. Adicione um **Item:**
   - **Activity:** `Purchase printed materials`
   - **Requested Amount:** `1200`
   - Vincule o **documento** que foi feito upload na atividade
4. **Total Budget:** `€1.200`
5. Clique em **Save as Draft**
6. ✅ **Verificar:** Pedido criado com status `DRAFT`
7. ✅ **Verificar:** No orçamento de `Youth Ministry`, o campo `allocated_amount` aumentou em `€1.200` (reserva)

---

### PASSO 5.3 — Submeter o Pedido

1. No pedido criado, clique em **Submit**
2. ✅ **Verificar:** Status muda para o primeiro status de revisão
3. ✅ **Verificar:** Uma notificação 🔔 é gerada para o Gerente Financeiro

---

### PASSO 5.4 — Fazer Upload de Recibo no Subsídio

1. Ainda no pedido de subsídio, clique na aba **Receipts**
   → URL: `/subsidies/receipts`
2. Clique em **Upload Receipt**
3. Selecione um arquivo (PDF ou imagem simulando nota fiscal)
4. Preencha o **amount** do recibo: `1200`
5. ✅ **Verificar:** Recibo aparece listado com status `PENDING`

---

### PASSO 5.5 — Aprovar o Pedido de Subsídio (como Gerente Financeiro)

1. **Faça logout** e **login como** `finance@teste.com` (senha: `123123`)
2. Vá em **Subsidies** → localize o pedido submetido
3. ✅ **Verificar:** Pedido aparece na lista
4. Clique no pedido
5. Clique em **Approve**
6. Informe o **Approved Amount:** `1200`
7. Clique em **Confirm**
8. ✅ **Verificar:** Status do pedido muda para `APPROVED`
9. ✅ **Verificar:** No orçamento de `Youth Ministry`:
   - `total_expenses` aumentou em `€1.200`
   - `balance` diminuiu de `€10.000` para `€8.800`
10. Valide o recibo: clique em **Validate Receipt**
11. ✅ **Verificar:** Recibo marcado como validado

---

### PASSO 5.6 — Verificar Impacto no Ledger

1. Vá em **Finance** → **Ledger History**
   → URL: `/finance/ledger-history`
2. ✅ **Verificar:** Aparecem as seguintes transações:
   - `ALLOCATION_RESERVED` de `€1.200` (quando o pedido foi criado)
   - `EXPENSE_APPROVED` de `€1.200` (quando foi aprovado)
3. ✅ **Verificar:** Todas as transações têm data, usuário responsável e descrição

---

### PASSO 5.7 — Criar e Rejeitar um Pedido

1. **Login como Admin**
2. Crie **novo pedido de subsídio** de `€300` vinculado à atividade `Train volunteer team`
3. Submeta o pedido
4. **Login como** `finance@teste.com`
5. Encontre o pedido
6. Clique em **Reject**
7. Digite o motivo: `Insufficient documentation provided`
8. ✅ **Verificar:** Status muda para `REJECTED`
9. ✅ **Verificar:** No orçamento, a reserva de `€300` é **devolvida** (`ALLOCATION_RELEASED`)
10. ✅ **Verificar:** Ledger History mostra o `ALLOCATION_RELEASED`

---

### PASSO 5.8 — Criar Pedido de Adiantamento

1. **Login como Admin**
2. Vá em **Subsidies** → clique em **New Advance Request**
3. Preencha:
   - **Project:** `Community Evangelism 2026`
   - **Advance Amount:** `500`
4. Clique em **Create**
5. ✅ **Verificar:** Pedido criado com `is_for_advance = true`
6. Submeta e aprove (como finance)
7. ✅ **Verificar:** `€500` registrado como gasto de adiantamento

---

### PASSO 5.9 — Solicitar Reembolso

1. No pedido de adiantamento aprovado, clique em **Request Refund**
2. Selecione **Partial Refund**
3. Digite o valor: `200`
4. Motivo: `Part of advance not spent`
5. ✅ **Verificar:** Pedido marcado com flag de reembolso pendente
6. **Login como** `finance@teste.com`
7. Encontre o subsídio aguardando reembolso
8. Clique em **Confirm Refund Done**
9. ✅ **Verificar:** `REFUND_PARTIAL` de `€200` aparece no Ledger History
10. ✅ **Verificar:** Saldo do orçamento aumenta em `€200`

---

### PASSO 5.10 — Verificar KPIs Consolidados

1. Vá em **Finance** → **Annual Budget**
2. ✅ **Verificar:**
   - `Budget KPIs`: Total Spent = `€1.500` (~€1.200 aprovado + €500 adiantamento - €200 reembolso)
   - Department Spending: `Youth Ministry` com gastos registrados
   - Os gráficos de `Spending Over Time` e `Budget Distribution` mostram dados

---

## MÓDULO 6 — Escala de Pregadores

> **Objetivo:** Configurar o calendário de cultos, gerenciar disponibilidade e designar pregadores.
> **Quem faz:** Cada usuário na sua função

---

### PASSO 6.1 — Pregador Configura Disponibilidade

1. **Login como** `preacher@teste.com` (senha: `123123`)
2. No menu lateral, clique em **Schedule** → **Availability**
   → URL: `/schedule/availability`
3. ✅ **Verificar:** Calendário do mês atual carrega
4. Clique em 2 datas específicas e marque como **UNAVAILABLE** (ex: 1ª e 2ª semana do mês)
5. ✅ **Verificar:** Datas ficam destacadas como indisponíveis
6. Clique em uma data e marque como **VACATION**
7. ✅ **Verificar:** Data aparece com cor diferente

---

### PASSO 6.2 — Criar Regra de Recorrência

1. Ainda em **Availability**, clique em **Recurrence Rules**
2. Clique em **Add Rule**
3. Configure:
   - **Type:** `WEEKLY`
   - **Status:** `AVAILABLE`
   - **Day:** `Saturday`
4. Clique em **Save**
5. ✅ **Verificar:** Todos os sábados do mês ficam marcados como disponíveis
6. Crie outra regra:
   - **Type:** `DATE_RANGE`
   - **Status:** `VACATION`
   - **From:** 15 do mês atual
   - **To:** 20 do mês atual
7. ✅ **Verificar:** Período de férias marcado (sobrepõe as regras semanais naquele período)
8. Delete a regra de `DATE_RANGE`
9. ✅ **Verificar:** Período de férias removido

---

### PASSO 6.3 — Igreja Configura Calendário de Cultos

1. **Login como** `churchleader@teste.com` (senha: `123123`)
2. Vá em **Churches** → Clique em `Amsterdam Central Church`
   → URL: `/churches/[id]`
3. Clique na aba **Service Calendar**
   → URL: `/churches/[id]/service-calendar`
4. ✅ **Verificar:** Calendário do mês carrega
5. Clique em **alguns sábados** e marque como dias de culto
6. ✅ **Verificar:** Datas confirmadas com `CHURCH_CONFIRMED`

---

### PASSO 6.4 — Admin Configura Calendário em Bulk

1. **Login como Admin** (`admin@mail.com`)
2. Vá em **Churches** → Clique em `Rotterdam Church` → **Service Calendar**
3. Clique em **Set Bulk Calendar**
4. Selecione todos os sábados do mês
5. ✅ **Verificar:** Datas configuradas com `BULK_DEFAULT` para Rotterdam

---

### PASSO 6.5 — Ver o Overview de Escalas e Gap Report

1. **Login como** `instdeptleader@teste.com` (se existir) ou Admin
2. No menu lateral, clique em **Schedule**
   → URL: `/schedule`
3. ✅ **Verificar:** Grid de escalas carrega — igrejas × datas
4. ✅ **Verificar:** Datas sem pregador designado aparecem em destaque (gap)
5. Clique em **Gap Report**
   → URL: `/schedule/gap-report`
6. ✅ **Verificar:** Relatório mostra quais igrejas estão sem pregador e em quais datas

---

### PASSO 6.6 — Designar Pregador Diretamente

1. No overview de escalas, clique em uma célula vazia (data sem pregador)
2. Selecione o pregador `Preacher Member`
3. ✅ **Verificar:** Célula preenchida, `Assignment` criada com `origin = ADMIN_ASSIGNED`
4. Clique na designação criada
5. Clique em **Remove** ou **Change**
6. ✅ **Verificar:** Designação removida ou atualizada

---

### PASSO 6.7 — Fluxo de Convite: Igreja Convida Pregador

1. **Login como** `churchleader@teste.com`
2. No Schedule, clique em uma data disponível
3. Clique em **Invite Preacher**
4. Selecione `Preacher Member`
5. Selecione um **Template de convite** (se existir) ou escreva mensagem livre
6. Clique em **Send Invite**
7. ✅ **Verificar:** Convite enviado com `origin = CHURCH_INVITED`

---

### PASSO 6.8 — Pregador Responde ao Convite

1. **Login como** `preacher@teste.com`
2. No menu lateral, clique em **Schedule** → **Invitations**
   → URL: `/schedule/invitations`
3. ✅ **Verificar:** O convite aparece listado
4. Clique em **Accept**
5. ✅ **Verificar:** Status do convite muda para `ACCEPTED`, `Assignment` confirmada
6. Volte ao Schedule Overview (como churchleader)
7. ✅ **Verificar:** A célula agora mostra o pregador designado

---

### PASSO 6.9 — Fluxo Inverso: Pregador Pede Vaga

1. **Login como** `preacher@teste.com`
2. Vá em **Schedule** → **Invitations** ou no calendário de vagas
3. ✅ **Verificar:** Lista de vagas abertas (`Open Slots`) aparece
4. Clique em uma vaga aberta
5. Clique em **Request This Slot**
6. ✅ **Verificar:** Pedido criado com `origin = PREACHER_REQUESTED`
7. **Login como** `churchleader@teste.com`
8. Em **Schedule** → **Invitations**, o pedido aparece
9. Clique em **Accept**
10. ✅ **Verificar:** Pregador designado para aquele culto

---

### PASSO 6.10 — Criar Templates de Convite

1. **Login como Admin** ou `instdeptleader@teste.com`
2. Vá em **Schedule** → **Invite Templates**
   → URL: `/schedule/invite-templates`
3. Clique em **New Template**
4. Preencha:
   - **Name:** `Standard Invite - Saturday Service`
   - **Message:** `Dear {name}, you are invited to preach at {church} on {date}. Please confirm your attendance.`
5. Clique em **Save**
6. ✅ **Verificar:** Template criado e aparece na lista
7. Edite o template e mude a mensagem
8. ✅ **Verificar:** Alteração salva
9. Delete o template
10. ✅ **Verificar:** Template removido

---

### PASSO 6.11 — Acesso Regional de Pregadores

1. **Login como Admin**
2. Vá em **Schedule** e localize **Preacher Region Access**
3. Conceda acesso a `Preacher Member` para a região `North Region`
4. ✅ **Verificar:** Pregador agora pode ser escalado para igrejas da North Region
5. **Login como** `preacher@teste.com`
6. ✅ **Verificar:** Igrejas da North Region aparecem nas vagas disponíveis
7. **Revogue o acesso** (como admin)
8. ✅ **Verificar:** Igrejas da North Region somem das vagas do pregador

---

### PASSO 6.12 — Fechamento Mensal

1. **Login como Admin** (ou `instdeptleader@teste.com`)
2. Vá em **Schedule**
3. Localize **Monthly Close** ou o botão de fechamento
4. Clique em **Close Month** para o mês atual
5. ✅ **Verificar:** Escalas do mês travadas — tentativa de editar retorna erro
6. ✅ **Verificar:** `MonthlyCloseResult` mostra resumo do fechamento

---

## MÓDULO 7 — Comunicação e Notificações

---

### PASSO 7.1 — Verificar Notificações em Tempo Real

1. Abra **duas abas do navegador** com logins diferentes (ou dois navegadores)
2. Aba 1: Login como `finance@teste.com`
3. Aba 2: Login como `admin@mail.com`
4. Na Aba 2 (admin): Aprove um subsídio
5. ✅ **Verificar (Aba 1):** O sino 🔔 no canto superior direito acende com notificação
6. Clique na notificação
7. ✅ **Verificar:** Notificação marcada como lida
8. Clique em **Mark All as Read**
9. ✅ **Verificar:** Contador do sino vai para zero

---

### PASSO 7.2 — Criar Comunicado Global

1. No menu lateral, clique em **Communications**
   → URL: `/communications`
2. Clique em **New Communication**
3. Preencha:
   - **Title:** `Important: New Budget Policy 2026`
   - **Type:** `IN_APP_MESSAGE`
   - **Message:** `All department leaders must submit budgets by January 31st.`
4. Clique em **Save**
5. ✅ **Verificar:** Comunicado aparece na lista
6. **Login como** `instleader@teste.com`
7. Vá em **Communications**
8. ✅ **Verificar:** O comunicado aparece para este usuário também
9. **Volte como Admin**, edite o comunicado e mude o título
10. ✅ **Verificar:** Título atualizado
11. Delete o comunicado
12. ✅ **Verificar:** Removido da lista

---

### PASSO 7.3 — Verificar Configurações da Instituição

1. **Login como Admin**
2. Vá em **Settings**
   → URL: `/settings`
3. ✅ **Verificar:** Configurações existentes carregam
4. Edite uma configuração existente (ex: mudar idioma padrão)
5. ✅ **Verificar:** Configuração salva

---

## MÓDULO 8 — Verificações de Segurança (Bloqueios de Permissão)

> **Objetivo:** Garantir que usuários sem permissão **não** consigam fazer o que não deveriam.

---

### PASSO 8.1 — Membro de Igreja não pode criar Orçamentos

1. **Login como** `preacher@teste.com`
2. Tente acessar `http://localhost:3000/finance/annual-budget`
3. ✅ **Verificar:** Redirecionado para página de erro `401/403` ou para `/unauthorized`
4. O botão **New Budget** não deve aparecer

---

### PASSO 8.2 — Membro não pode Aprovar Subsídios

1. Ainda como `preacher@teste.com`
2. Tente acessar `/subsidies`
3. ✅ **Verificar:** Acesso bloqueado ou botão **Approve** não aparece

---

### PASSO 8.3 — Church Leader não pode usar Set Assignment Any

1. **Login como** `churchleader@teste.com`
2. Vá em **Schedule**
3. Tente designar pregador para `Rotterdam Church` (que não é sua igreja)
4. ✅ **Verificar:** Ação bloqueada (botão não aparece ou API retorna erro `403`)

---

### PASSO 8.4 — Membro não pode Criar Roles

1. **Login como** `instdeptmember@teste.com` (ou qualquer membro)
2. Tente acessar `/access/roles`
3. ✅ **Verificar:** Redirecionado para `/unauthorized` ou sem botão de criar

---

### PASSO 8.5 — Usuário não pode editar perfil de outro

1. **Login como** `churchleader@teste.com`
2. Tente editar o perfil de `admin@mail.com` via URL direta: `/users/[id-do-admin]`
3. Clique em Edit (se aparecer)
4. ✅ **Verificar:** API retorna erro `403` — o guard verifica `updateUser` vs `updateOwnUser`

---

## MÓDULO 9 — Cleanup e Verificações Finais

---

### PASSO 9.1 — Verificar Dashboard

1. **Login como Admin**
2. Acesse o **Dashboard**
   → URL: `/dashboard`
3. ✅ **Verificar:**
   - Métricas da instituição aparecem (nº de igrejas, usuários, projetos)
   - KPIs financeiros do ano mostram valores corretos
   - Gráficos carregam sem erros de console

---

### PASSO 9.2 — Verificar Annual Reports

1. Vá em **Annual Reports**
   → URL: `/annual-reports`
2. ✅ **Verificar:** Relatório do ano carrega com dados inseridos

---

### PASSO 9.3 — Deletar Entidades e Verificar Soft-Delete

| Entidade | Ação | Verificação |
|---|---|---|
| Projeto | Clique em Delete no projeto | Não aparece mais na listagem |
| Departamento | Delete `Worship Team` | Não aparece, mas dados históricos preservados |
| Usuário | Delete `Rotterdam Member` | Não aparece em `/users` |
| Role Customizado | Delete `Administrative Assistant` | Não aparece em `/access/roles` |
| Região | Delete `South Region` (verificar se tem igrejas vinculadas primeiro) | Removida da lista |

---

### PASSO 9.4 — Verificar Auditoria Completa no Ledger History

1. Vá em **Finance** → **Ledger History**
   → URL: `/finance/ledger-history`
2. ✅ **Verificar:** A seguinte sequência de transações aparece em ordem cronológica:

| # | Tipo | Valor | Gerado quando |
|---|---|---|---|
| 1 | `ALLOCATION_RESERVED` | `€1.200` | Pedido de subsídio criado |
| 2 | `EXPENSE_APPROVED` | `€1.200` | Subsídio aprovado |
| 3 | `ALLOCATION_RELEASED` | `€300` | Subsídio de €300 rejeitado |
| 4 | `ALLOCATION_RESERVED` | `€500` | Adiantamento criado |
| 5 | `EXPENSE_APPROVED` | `€500` | Adiantamento aprovado |
| 6 | `REFUND_PARTIAL` | `€200` | Reembolso parcial confirmado |

3. ✅ **Verificar:** Cada transação tem: data, valor, tipo, descrição e usuário responsável

---

## Resumo de Critérios de Aprovação

| Módulo | Critério de Sucesso |
|---|---|
| 1 — Estrutura | Instituição, 2 regiões, 2 igrejas, 3+ departamentos criados |
| 2 — Usuários | 5+ usuários com roles diferentes, role customizado funcionando |
| 3 — Orçamentos | 3 orçamentos aprovados, lock/unlock funcionando, KPIs corretos |
| 4 — Projetos | Projeto com 3 atividades, voluntários, histórico e ajuste |
| 5 — Subsídios | Fluxo completo: criação → upload → aprovação → impacto no saldo |
| 6 — Escala | Disponibilidade, calendário, designação manual, convite, resposta e fechamento |
| 7 — Comunicação | Notificações em tempo real, comunicado criado/editado/deletado |
| 8 — Segurança | Todos os bloqueios de permissão verificados |
| 9 — Auditoria | Ledger History completo e consistente com todas as transações |
