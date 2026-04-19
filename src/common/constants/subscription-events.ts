/** Nomes dos eventos de GraphQL Subscriptions */

/** Disparado para todos os usuários com a tela do projeto aberta (filtra por projectId) */
export const PROJECT_HISTORY_ADDED = 'projectHistoryAdded';

/** Disparado individualmente para cada colaborador do projeto (filtra por userId).
 *  Usado para notificações globais — mesmo sem o modal de histórico aberto. */
export const USER_PROJECT_HISTORY_ADDED = 'userProjectHistoryAdded';
