import styled, { css } from "styled-components";

const colorsModifiers = {
  fire: () => css`
    background-color: ${({ theme }) => theme.colors.fire};
  `,
  normal: () => css`
    background-color: ${({ theme }) => theme.colors.normal};
  `,
  water: () => css`
    background-color: ${({ theme }) => theme.colors.water};
  `,
  grass: () => css`
    background-color: ${({ theme }) => theme.colors.grass};
    color: ${({ theme }) => theme.colors.black};
  `,
  ice: () => css`
    background-color: ${({ theme }) => theme.colors.ice};
  `,
  poison: () => css`
    background-color: ${({ theme }) => theme.colors.poison};
  `,
  ground: () => css`
    background-color: ${({ theme }) => theme.colors.ground};
  `,
  flying: () => css`
    background-color: ${({ theme }) => theme.colors.flying};
  `,
  bug: () => css`
    background-color: ${({ theme }) => theme.colors.bug};
  `,
  rock: () => css`
    background-color: ${({ theme }) => theme.colors.rock};
  `,
  ghost: () => css`
    background-color: ${({ theme }) => theme.colors.ghost};
  `,
  dragon: () => css`
    background-color: ${({ theme }) => theme.colors.dragon};
  `,
  dark: () => css`
    background-color: ${({ theme }) => theme.colors.dark};
  `,
  steel: () => css`
    background-color: ${({ theme }) => theme.colors.steel};
    color: ${({ theme }) => theme.colors.black};
  `,
  fairy: () => css`
    background-color: ${({ theme }) => theme.colors.fairy};
    color: ${({ theme }) => theme.colors.black};
  `,
  psychic: () => css`
    background-color: ${({ theme }) => theme.colors.psychic};
  `,
  electric: () => css`
    background-color: ${({ theme }) => theme.colors.electric};
  `,
  fighting: () => css`
    background-color: ${({ theme }) => theme.colors.fighting};
  `,
};

export type StyledChipProps = {
  pokemonType?:
    | "fire"
    | "normal"
    | "water"
    | "grass"
    | "ice"
    | "poison"
    | "ground"
    | "flying"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy"
    | "psychic"
    | "electric"
    | "fighting";
};

export const StyledChip = styled.button<StyledChipProps>`
  width: auto;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spaces.xs + " " + theme.spaces.sm};
  border-radius: ${({ theme }) => theme.spaces.xxs};
  ${({ pokemonType }) => pokemonType && colorsModifiers[pokemonType]};
  border: none;
`;
