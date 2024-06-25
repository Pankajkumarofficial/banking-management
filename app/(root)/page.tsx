import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: "Pankaj", lastName: "Kumar", email: "pankaj@gmail.com" }

  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Guest"} subtext="Access and manage your account and transaction efficiently." />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1435982.35} />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 156236 }, { currentBalance: 984615 }]} />
    </section>
  )
}

export default Home
