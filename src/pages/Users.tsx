import React from 'react';
import { ListGroup } from 'reactstrap';
import Pagination from '../components/Pagination';

import UserItem from '../components/User';
import Filter from '../components/Filter';

const data = {
  _meta: {
    success: true,
    code: 200,
    message: 'OK. Everything worked as expected.',
    totalCount: 1815,
    pageCount: 91,
    currentPage: 1,
    perPage: 20,
    rateLimit: { limit: 30, remaining: 29, reset: 2 },
  },
  result: [
    {
      id: '11913',
      first_name: 'Herminia',
      last_name: 'Koepp',
      gender: 'female',
      dob: '1977-11-27',
      email: 'mosciski.arielle@example.org',
      phone: '(221) 464-3139',
      website: 'http://price.com/et-voluptas-omnis-nam-qui-perspiciatis',
      address: '513 Henri Walk Apt. 599\nSouth Marisa, VA 99073',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11913' },
        edit: { href: 'https://gorest.co.in/public-api/users/11913' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?39154' },
      },
    },
    {
      id: '11916',
      first_name: 'Boris',
      last_name: 'Becker',
      gender: 'male',
      dob: '1974-07-31',
      email: 'ysipes@example.com',
      phone: '759-598-5165 x7321',
      website:
        'https://runolfsdottir.org/expedita-eos-illum-dicta-quod-asperiores-iure.html',
      address: '13110 Elian Station\nLake Mercedes, MN 24717-5504',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11916' },
        edit: { href: 'https://gorest.co.in/public-api/users/11916' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?57634' },
      },
    },
    {
      id: '11918',
      first_name: 'Emilia',
      last_name: 'Robel',
      gender: 'female',
      dob: '1949-01-14',
      email: 'ryan.agnes@example.com',
      phone: '(514) 618-8655 x26218',
      website: 'http://www.volkman.com/nisi-amet-unde-numquam-id-asperiores',
      address: '149 Weissnat Forks\nSouth Toreybury, ME 50711-7903',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11918' },
        edit: { href: 'https://gorest.co.in/public-api/users/11918' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?29241' },
      },
    },
    {
      id: '11920',
      first_name: 'Kayden',
      last_name: 'Pacocha',
      gender: 'male',
      dob: '2014-03-15',
      email: 'whitney.west@example.com',
      phone: '+1-785-550-0478',
      website: 'http://www.kassulke.com/',
      address: '564 Krajcik Pines\nSouth Tryciaside, HI 49559-8514',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11920' },
        edit: { href: 'https://gorest.co.in/public-api/users/11920' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?30647' },
      },
    },
    {
      id: '11922',
      first_name: 'Teagan',
      last_name: 'Collier',
      gender: 'female',
      dob: '2010-02-11',
      email: 'bogisich.valentin@example.com',
      phone: '(836) 733-7717 x74141',
      website:
        'https://ohara.com/ab-a-voluptas-tenetur-deserunt-aut-et-accusamus.html',
      address: '684 Marianne Point\nManteside, ME 31968-0928',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11922' },
        edit: { href: 'https://gorest.co.in/public-api/users/11922' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?77726' },
      },
    },
    {
      id: '11923',
      first_name: 'Boris',
      last_name: 'Becker',
      gender: 'male',
      dob: '1956-10-25',
      email: 'orrin55@example.net',
      phone: '1-314-472-2960',
      website:
        'https://hessel.com/laudantium-veritatis-ducimus-aliquid-ex-ipsam-dolor-a.html',
      address: '11138 Hudson Hollow\nMaddisonchester, TX 27816-1292',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11923' },
        edit: { href: 'https://gorest.co.in/public-api/users/11923' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?81302' },
      },
    },
    {
      id: '11924',
      first_name: 'Kailyn',
      last_name: 'Cartwright',
      gender: 'female',
      dob: '2009-05-03',
      email: 'qryan@example.net',
      phone: '+1-490-517-1374',
      website: 'http://www.block.com/iure-amet-modi-non-quae-eius-tempore',
      address: '986 Kara Plain\nNew Emerson, OK 33277',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11924' },
        edit: { href: 'https://gorest.co.in/public-api/users/11924' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?75059' },
      },
    },
    {
      id: '11925',
      first_name: 'Desmond',
      last_name: 'Carroll',
      gender: 'male',
      dob: '1939-06-24',
      email: 'tyreek.jast@example.com',
      phone: '216-520-7531',
      website: 'http://www.schroeder.com/perspiciatis-rem-nulla-itaque-ab',
      address: '18516 Bennett Stream\nKlockoton, WA 94191',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11925' },
        edit: { href: 'https://gorest.co.in/public-api/users/11925' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?74194' },
      },
    },
    {
      id: '11926',
      first_name: 'Enrico',
      last_name: 'Hills',
      gender: 'male',
      dob: '2002-12-04',
      email: 'abbey.watsica@example.org',
      phone: '262-527-2447 x74624',
      website: 'http://larson.com/neque-ab-omnis-rerum-et-in-omnis-iure',
      address: '902 Koch Extensions\nEast Talon, TN 67452',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11926' },
        edit: { href: 'https://gorest.co.in/public-api/users/11926' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?19781' },
      },
    },
    {
      id: '11927',
      first_name: 'Julia',
      last_name: 'Wintheiser',
      gender: 'female',
      dob: '1990-02-26',
      email: 'krussel@example.net',
      phone: '1-530-930-3648 x86994',
      website:
        'http://nicolas.info/optio-suscipit-ducimus-praesentium-repudiandae-minus-ipsa-quidem-accusamus.html',
      address: '52205 Fritsch Grove Suite 817\nSouth Santos, MA 83874',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11927' },
        edit: { href: 'https://gorest.co.in/public-api/users/11927' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?93473' },
      },
    },
    {
      id: '11928',
      first_name: 'Sonia',
      last_name: 'Toy',
      gender: 'female',
      dob: '2008-03-20',
      email: 'wolf.joan@example.org',
      phone: '1-729-783-7270 x3388',
      website:
        'http://www.reichel.com/omnis-rerum-fuga-excepturi-qui-cum-possimus-fugiat',
      address: '74320 McCullough Lakes\nSouth Emil, MT 23247',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11928' },
        edit: { href: 'https://gorest.co.in/public-api/users/11928' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?65007' },
      },
    },
    {
      id: '11929',
      first_name: 'Blake',
      last_name: 'Orn',
      gender: 'male',
      dob: '1927-08-11',
      email: 'fisher.adelia@example.net',
      phone: '(840) 737-0530 x7964',
      website: 'https://dickens.com/et-nulla-distinctio-cumque.html',
      address: '144 Jane Pass\nKuphalbury, SC 89487',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11929' },
        edit: { href: 'https://gorest.co.in/public-api/users/11929' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?50328' },
      },
    },
    {
      id: '11933',
      first_name: 'Garland',
      last_name: 'Beer',
      gender: 'male',
      dob: '1957-05-12',
      email: 'schuster.elwyn@example.com',
      phone: '823-382-4409 x1254',
      website: 'http://lockman.com/ut-velit-dolore-fugit-error-iure-vel',
      address: '439 Markus Crest Suite 290\nLake Zackary, WY 28547-0504',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11933' },
        edit: { href: 'https://gorest.co.in/public-api/users/11933' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?80843' },
      },
    },
    {
      id: '11934',
      first_name: 'Assunta',
      last_name: 'Prohaska',
      gender: 'female',
      dob: '1941-03-01',
      email: 'damore.courtney@example.org',
      phone: '+1.780.782.1696',
      website: 'https://www.thiel.info/eaque-in-porro-aspernatur',
      address: '46056 Morar Forest\nHannahaven, MT 14004-2976',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11934' },
        edit: { href: 'https://gorest.co.in/public-api/users/11934' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?77241' },
      },
    },
    {
      id: '11936',
      first_name: 'Danika',
      last_name: 'Fritsch',
      gender: 'female',
      dob: '1974-07-05',
      email: 'imedhurst@example.com',
      phone: '1-242-457-4396 x481',
      website:
        'https://www.douglas.com/voluptatem-excepturi-fugit-cumque-deserunt-dolore-eligendi-officiis',
      address: '2687 Emerson Lake Suite 970\nSouth Francesca, VA 98705',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11936' },
        edit: { href: 'https://gorest.co.in/public-api/users/11936' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?25424' },
      },
    },
    {
      id: '11937',
      first_name: 'Ryley',
      last_name: 'Shields',
      gender: 'male',
      dob: '1983-12-16',
      email: 'schneider.jadyn@example.net',
      phone: '414.225.0408',
      website:
        'https://www.kihn.com/ea-ducimus-deleniti-rerum-impedit-adipisci',
      address: '12129 Kacie Ford Apt. 102\nEmmanuellestad, VA 44631-6235',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11937' },
        edit: { href: 'https://gorest.co.in/public-api/users/11937' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?31135' },
      },
    },
    {
      id: '11938',
      first_name: 'Oscar',
      last_name: 'Bogan',
      gender: 'male',
      dob: '1982-03-25',
      email: 'dicki.chad@example.org',
      phone: '285.967.4453 x317',
      website:
        'https://fahey.org/nihil-nam-voluptatem-tenetur-iure-molestiae.html',
      address: '9992 Hackett Expressway\nGrahamton, ME 51118-5575',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11938' },
        edit: { href: 'https://gorest.co.in/public-api/users/11938' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?12045' },
      },
    },
    {
      id: '11939',
      first_name: 'Lonnie',
      last_name: 'Mohr',
      gender: 'male',
      dob: '1951-02-28',
      email: 'gerson74@example.com',
      phone: '1-330-529-1184 x8029',
      website: 'http://mann.info/deserunt-aliquid-possimus-porro',
      address: '2685 Catherine Dale Suite 336\nSchinnermouth, LA 84485',
      status: 'inactive',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11939' },
        edit: { href: 'https://gorest.co.in/public-api/users/11939' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?50755' },
      },
    },
    {
      id: '11940',
      first_name: 'Vita',
      last_name: 'Hyatt',
      gender: 'female',
      dob: '1970-02-14',
      email: 'alessandra98@example.net',
      phone: '580-884-7642',
      website: 'http://www.keebler.info/',
      address: '70499 Sawayn Curve Suite 438\nFeeneybury, AK 79241',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11940' },
        edit: { href: 'https://gorest.co.in/public-api/users/11940' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?50570' },
      },
    },
    {
      id: '11941',
      first_name: 'Jensen',
      last_name: 'Walsh',
      gender: 'male',
      dob: '1984-12-28',
      email: 'baumbach.kiera@example.com',
      phone: '(974) 407-9327 x9209',
      website:
        'https://www.hansen.net/quas-vero-officia-dolore-atque-laudantium',
      address: '5078 Melvina Junctions Suite 638\nCarmelborough, ME 18537-3829',
      status: 'active',
      _links: {
        self: { href: 'https://gorest.co.in/public-api/users/11941' },
        edit: { href: 'https://gorest.co.in/public-api/users/11941' },
        avatar: { href: 'https://lorempixel.com/250/250/people/?40371' },
      },
    },
  ],
};

interface Props {}

const Users = (props: Props) => {
  const selectPage = (pageNumber: number): void => console.log(pageNumber);
  const filterUsers = (filterText: string): void => console.log(filterText);
  return (
    <div>
      <h2>Users</h2>
      <Filter onFilter={filterUsers} />
      <ListGroup>
        {data.result.map((user) => (
          <UserItem
            key={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            id={user.id}
            avatar={user._links.avatar.href}
          ></UserItem>
        ))}
      </ListGroup>

      <Pagination
        currentPage={data._meta.currentPage}
        pageCount={data._meta.pageCount}
        selectPage={selectPage}
      />
    </div>
  );
};

export default Users;
