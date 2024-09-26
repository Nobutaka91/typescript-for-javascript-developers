export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
}

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OotaniShouhei: TwoWayPlayer = {
  throwingSpeed: 264,
  battingAverage: 0.286
}