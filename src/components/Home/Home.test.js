import { render, screen, waitFor } from '@testing-library/react';

import Home from './Home';
import React from 'react';

// Mocked recipes data
const mockRecipes = [
    {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "ingredients": [
            "400g Spaghetti",
            "200g Pancetta",
            "4 große Eier",
            "100g geriebener Parmesan",
            "Schwarzer Pfeffer",
            "Salz"
        ],
        "steps": [
            "Pasta nach Packungsanweisung in Salzwasser kochen.",
            "Pancetta in einer Pfanne knusprig braten.",
            "Eier und Parmesan in einer Schüssel mischen.",
            "Gekochte Pasta mit der Pancetta, der Eier-Käse-Mischung vermengen und schnell umrühren.",
            "Mit Salz und reichlich frisch gemahlenem schwarzen Pfeffer abschmecken."
        ],
        "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww"
    },
    {
        "id": 2,
        "name": "Caesar Salad",
        "ingredients": [
            "1 Kopf Römersalat",
            "2 Scheiben Weißbrot",
            "50g Parmesan",
            "1/2 Tasse Caesar Dressing",
            "100g Hähnchenbrust",
            "1 Teelöffel Olivenöl"
        ],
        "steps": [
            "Salat waschen, trocknen und in große Stücke zupfen.",
            "Hähnchenbrust kochen und in dünne Scheiben schneiden.",
            "Weißbrot in Würfel schneiden und in einer Pfanne mit Olivenöl rösten.",
            "Alle Zutaten in einer großen Schüssel mit Caesar Dressing vermischen.",
            "Mit frisch geriebenem Parmesan bestreuen."
        ],
        "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D"
    },
];

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockRecipes),
        ok: true
    })
);

describe('Home Component', () => {
    test('renders recipes correctly', async () => {
        render(<Home />);
        await waitFor(() => {
            expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
            expect(screen.getByText('Caesar Salad')).toBeInTheDocument();
        });
    });
});
