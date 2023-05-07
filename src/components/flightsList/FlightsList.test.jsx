import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlightsList from './FlightsList';

const flightsData = [
  {
    id: '1',
    flight: 'LX155',
    time: '12:20',
    terminal: 'B',
    way: 'Dubai',
    status: 'Scheduled',
    company: 'Swiss',
    logo: 'swiss',
  },
  {
    id: '2',
    flight: 'FR654',
    time: '13:45',
    terminal: 'A',
    way: 'Barcelona',
    status: 'Delayed',
    company: 'Ryanair',
    logo: 'ryanair',
  },
  {
    id: '3',
    flight: 'LO373',
    time: '15:10',
    terminal: 'C',
    way: 'Warsaw',
    status: 'Departed',
    company: 'LOT',
    logo: 'lot',
  },
];

describe('FlightsList', () => {
  it('renders list of flights', () => {
    render(<FlightsList flightsData={flightsData} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(flightsData.length);
  });

  it('should render "No Flights" when there are no flights data', () => {
    render(<FlightsList flightsData={[]} />);
    expect(screen.getByText('No Flights')).toBeInTheDocument();
  });

  it('list render does not render without data', () => {
    render(<FlightsList />);
    expect(screen.queryByRole('list')).toBeNull();
  });

  it('list snapshot', () => {
    const list = render(<FlightsList flightsData={flightsData} />);
    expect(list).toMatchSnapshot();
  });
});
