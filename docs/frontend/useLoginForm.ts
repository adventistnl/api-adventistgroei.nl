/**
 * useLoginForm.ts
 *
 * Utilitário para usar no frontend React/Next.js com React Hook Form.
 * Mapeia os erros de login da API para os campos do formulário.
 *
 * Instalação (se ainda não tiver):
 *   pnpm add react-hook-form @apollo/client graphql
 *
 * Uso:
 *   const { register, handleSubmit, formState: { errors } } = useLoginForm();
 */

// ─── Tipos de resposta da API ─────────────────────────────────────────────────

export interface LoginFieldError {
  /** Campo que originou o erro: 'email', 'password' ou 'general' */
  field: 'email' | 'password' | 'general';
  /** Mensagem traduzida retornada pela API */
  message: string;
}

/** Extensões do erro GraphQL retornado pela API */
interface AuthErrorExtensions {
  code: string;
  status: number;
  context?: {
    additional?: {
      field?: 'email' | 'password';
    };
  };
}

// ─── Parser de erro ───────────────────────────────────────────────────────────

/**
 * Converte o erro GraphQL da mutação Login em um objeto padronizado
 * com o campo específico que falhou e a mensagem traduzida.
 *
 * @example
 * const result = await loginMutation({ variables: { email, password, lang } });
 * // Em caso de erro:
 * const fieldError = parseLoginError(error);
 * // fieldError.field  → 'email' | 'password' | 'general'
 * // fieldError.message → "E-mailadres niet gevonden"
 */
export function parseLoginError(error: unknown): LoginFieldError {
  const graphqlErrors = (error as any)?.graphQLErrors;

  if (!graphqlErrors || graphqlErrors.length === 0) {
    return { field: 'general', message: 'An unexpected error occurred.' };
  }

  const gqlError = graphqlErrors[0];
  const extensions = gqlError?.extensions as AuthErrorExtensions | undefined;
  const field = extensions?.context?.additional?.field;
  const message: string = gqlError?.message ?? 'An error occurred. Please try again.';

  if (field === 'email') return { field: 'email', message };
  if (field === 'password') return { field: 'password', message };
  return { field: 'general', message };
}

// ─── Exemplo de uso com React Hook Form + Apollo Client ───────────────────────

/*
import { useForm } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';
import { parseLoginError } from './useLoginForm';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!, $lang: String) {
    login(input: { email: $email, password: $password, lang: $lang }) {
      accessToken
      expiresIn
      user {
        id
        name
        email
        language_preference
        user_roles {
          id
          key_code
          name
        }
      }
    }
  }
`;

interface LoginFormValues {
  email: string;
  password: string;
}

export function useLoginForm(lang: 'en' | 'nl' = 'nl') {
  const form = useForm<LoginFormValues>();
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const { data } = await loginMutation({
        variables: { ...values, lang },
      });

      // ✅ Sucesso — salvar token e redirecionar
      const { accessToken, user } = data.login;
      localStorage.setItem('token', accessToken);
      // router.push('/dashboard');

    } catch (error) {
      const fieldError = parseLoginError(error);

      if (fieldError.field === 'email') {
        form.setError('email', { message: fieldError.message });
      } else if (fieldError.field === 'password') {
        form.setError('password', { message: fieldError.message });
      } else {
        form.setError('root', { message: fieldError.message });
      }
    }
  });

  return { ...form, onSubmit, loading };
}
*/

// ─── Exemplo de uso com Next.js App Router + Server Actions ──────────────────

/*
'use server';

import { parseLoginError } from './useLoginForm';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const lang = 'nl'; // ou pegar do cookie/locale

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `mutation Login($email: String!, $password: String!, $lang: String) {
        login(input: { email: $email, password: $password, lang: $lang }) {
          accessToken
          user { id name email }
        }
      }`,
      variables: { email, password, lang },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    const fieldError = parseLoginError({ graphQLErrors: json.errors });
    return { error: fieldError };
  }

  return { data: json.data.login };
}
*/
