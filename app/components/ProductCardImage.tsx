"use client";

/**
 * Faixa de imagem no topo dos cards de produto.
 *
 * O enquadramento vem de `position` (ponto focal do crop do Figma) somado a um
 * `zoom` opcional, em vez de offsets absolutos em porcentagem: assim a imagem
 * cobre a faixa inteira em qualquer largura de tela, sem sobrar espaço vazio.
 */
export function ProductCardImage({
  src,
  position,
  zoom = 1,
  className = "h-[180px]",
}: {
  src: string;
  position: string;
  zoom?: number;
  className?: string;
}) {
  return (
    <div className={`${className} shrink-0 overflow-hidden`}>
      <img
        src={src}
        alt=""
        className="block w-full h-full object-cover"
        style={{
          objectPosition: position,
          transformOrigin: position,
          transform: `scale(${zoom})`,
        }}
      />
    </div>
  );
}
