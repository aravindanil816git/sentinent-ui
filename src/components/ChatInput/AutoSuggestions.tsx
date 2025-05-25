import React from "react";
import styled from "styled-components";

const PillsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Pill = styled.button`
  background: #f1f1f1;
  color: #808080;
  border: 1px solid #F4F4F4;
  border-radius: 6px;
  padding: 12px 20px;
  font-size: 11px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e0e0e0;
  }
`;

const SUGGESTIONS = [
  "Summarize this text",
  "Explain like I'm five",
  "Write a tweet",
  "Translate to Spanish",
];

type AutoSuggestionsProps = {
  onSuggestionClick?: (suggestion: string) => void;
};

const AutoSuggestions: React.FC<AutoSuggestionsProps> = ({ onSuggestionClick }) => (
  <PillsContainer>
    {SUGGESTIONS.map((s) => (
      <Pill key={s} type="button" onClick={() => onSuggestionClick?.(s)}>
        {s}
      </Pill>
    ))}
  </PillsContainer>
);

export default AutoSuggestions;