/**
 * Monta os endereços internos do site.
 *
 * POR QUE ISSO EXISTE:
 * O site mora em uma subpasta (/Shiv-Tech) porque está no GitHub Pages.
 * Se escrevêssemos href="/produtos" direto, o link iria para
 * rana-shiv.github.io/produtos — que não existe.
 *
 * Usando url('/produtos') o endereço sai correto hoje, e continua correto
 * no dia em que você migrar para domínio próprio: basta trocar o `base`
 * no astro.config.mjs e nenhum link precisa ser reescrito.
 */

const BASE = import.meta.env.BASE_URL;

export function url(path = '/'): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const joined = `${base}${clean}`.replace(/\/{2,}/g, '/');
  // Remove a barra final, exceto quando o endereço é apenas "/"
  return joined.length > 1 ? joined.replace(/\/$/, '') : '/';
}

/** Verifica se um item do menu corresponde à página aberta (para marcar como atual). */
export function isActive(currentPath: string, target: string): boolean {
  const normalize = (p: string) =>
    p.length > 1 ? p.replace(/\/$/, '') : p;
  const current = normalize(currentPath);
  const dest = normalize(url(target));
  if (dest === url('/')) return current === dest;
  return current === dest || current.startsWith(`${dest}/`);
}
