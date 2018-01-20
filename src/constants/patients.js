import { getYearsBetweenDates } from '../utils/date';

export const patientListColumns = [
    {
        accessor: (data) => {
            const { first, last } = data.name;
            return `${first} ${last}`;
        },
        displayName: 'Name',
        key: 'name',
    },
    {
        accessor: (data) => data.mrn,
        displayName: 'MRN',
        key: 'mrn',
    },
    {
        accessor: (data) => data.dob,
        displayName: 'Date of Birth',
        key: 'dob',
    },
    {
        accessor: (data) => {
            const { dob, sex } = data;
            const age = getYearsBetweenDates(dob);
            return `${age} year old ${sex}`;
        },
        displayName: 'Demographics',
        key: 'demo',
    },
    {
        accessor: (data) => data.treatment_site,
        displayName: 'Treatment Site',
        key: 'site',
    },
];