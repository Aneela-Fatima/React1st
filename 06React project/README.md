
## Project oveview

This project was made to implement a live currency converter with:

- API-based currency rate fetching using a public exchange rate service.
- Dynamic currency dropdowns populated from fetched rate data.
- A working convert button that computes the converted amount from the selected source currency to the selected target currency.
- A default target currency of `PKR` in the `To` field.
- Loading and error state handling for the currency fetch.
- A swap button to switch the source and target currencies.

## What I learned

- how to fetch currency rates from an external API and handle loading/error states in React.
- how to derive dropdown options from API response data and keep the UI stable while loading.
- how to manage controlled inputs and calculated output values in a React form.
- how to use React hooks like `useState`, `useEffect`, and `useMemo` to keep state and derived values synchronized.
