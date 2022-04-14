import styled from "styled-components";

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.alternateBackground};
    padding: 1rem;
    width: auto;
    height: auto;
    border-radius: 0.5rem;
`;
export const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    
`;
export const ProgressBar = styled.progress`
    appearance: none;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    ::-moz-progress-bar {
        background-color: '#b3b3b3';
        border-radius: 0.25rem;
    }
    ::-webkit-progress-bar {
        background-color: '#b3b3b3';
        height: 0.25rem;
        border-radius: 0.25rem;
    }
    ::-webkit-progress-value {
        background-color: ${({ theme }) => theme.primaryVariant};
        height: 0.25rem;
        border-radius: 0.25rem;
    }
`;
export const ThemeParagraph = styled.p`
    color: ${({ theme }) => theme.foreground};
`;