let data = [
	{
		term_en: "Agile",
		term_hu: "Agilis",
		description_en:
			"A methodology for software development that emphasizes iterative progress and collaboration.",
		description_hu:
			"Szoftverfejlesztési módszertan, amely az iteratív fejlődést és az együttműködést hangsúlyozza.",
	},
	{
		term_en: "Algorithm",
		term_hu: "Algoritmus",
		description_en:
			"A set of rules for solving a problem or completing a task.",
		description_hu:
			"Szabályok halmaza egy probléma megoldásához vagy egy feladat elvégzéséhez.",
	},
	{
		term_en: "API",
		term_hu: "API",
		description_en:
			"A set of protocols for building and interacting with software applications.",
		description_hu:
			"Protokollok készlete a szoftveralkalmazások létrehozásához és velük való interakcióhoz.",
	},
	{
		term_en: "Backend",
		term_hu: "Háttér",
		description_en:
			"The server-side part of a web application responsible for data processing and storage.",
		description_hu:
			"A webalkalmazás szerveroldali része, amely felelős az adatfeldolgozásért és tárolásért.",
	},
	{
		term_en: "Big Data",
		term_hu: "Nagy adathalmaz",
		description_en:
			"Extremely large data sets that require specialized tools for analysis and processing.",
		description_hu:
			"Olyan rendkívül nagy adathalmazok, amelyekhez speciális eszközök szükségesek az elemzéshez és feldolgozáshoz.",
	},
	{
		term_en: "Blockchain",
		term_hu: "Blokklánc",
		description_en:
			"A decentralized ledger of all transactions across a network, designed to be secure and transparent.",
		description_hu:
			"Egy decentralizált főkönyv, amely egy hálózat összes tranzakcióját tartalmazza, biztonságos és átlátható módon.",
	},
	{
		term_en: "Cloud Computing",
		term_hu: "Felhőalapú számítástechnika",
		description_en:
			"Delivery of computing services over the internet for storage, processing, and management.",
		description_hu:
			"Számítástechnikai szolgáltatások nyújtása az interneten keresztül tárolásra, feldolgozásra és kezelésre.",
	},
	{
		term_en: "Containerization",
		term_hu: "Kontejnerizáció",
		description_en:
			"A method of packaging an application and its dependencies into a container for consistent execution across environments.",
		description_hu:
			"Módszer, amely egy alkalmazást és annak függőségeit egy konténerbe csomagolja, hogy konzisztensen futtatható legyen különböző környezetekben.",
	},
	{
		term_en: "Cybersecurity",
		term_hu: "Kiberbiztonság",
		description_en:
			"Practices and technologies designed to protect systems, networks, and data from cyber threats.",
		description_hu:
			"Rendszerek, hálózatok és adatok védelmét szolgáló gyakorlatok és technológiák a kiberfenyegetések ellen.",
	},
	{
		term_en: "Data Breach",
		term_hu: "Adatvédelmi incidens",
		description_en:
			"An incident where unauthorized access to confidential data occurs.",
		description_hu:
			"Egy esemény, amely során jogosulatlan hozzáférés történik bizalmas adatokhoz.",
	},
	{
		term_en: "Data Mining",
		term_hu: "Adatbányászat",
		description_en:
			"The process of discovering patterns and insights from large data sets using statistical methods.",
		description_hu:
			"Az a folyamat, amely során nagy adathalmazokból statisztikai módszerekkel mintákat és betekintést fedeznek fel.",
	},
	{
		term_en: "Data Warehouse",
		term_hu: "Adattárház",
		description_en:
			"A centralized repository for storing and analyzing large volumes of structured data.",
		description_hu:
			"Központosított adattároló, amelyben nagy mennyiségű strukturált adat tárolható és elemezhető.",
	},
	{
		term_en: "Database",
		term_hu: "Adatbázis",
		description_en:
			"An organized collection of data, typically stored and accessed electronically.",
		description_hu: "Elektronikusan tárolt és elérhető adatgyűjtemény.",
	},
	{
		term_en: "DevOps",
		term_hu: "DevOps",
		description_en:
			"A set of practices that combine software development and IT operations for faster delivery.",
		description_hu:
			"Olyan gyakorlatok összessége, amelyek ötvözik a szoftverfejlesztést és az IT üzemeltetést a gyorsabb szállítás érdekében.",
	},
	{
		term_en: "DevSecOps",
		term_hu: "DevSecOps",
		description_en:
			"A practice that integrates security into the DevOps process.",
		description_hu:
			"Olyan gyakorlat, amely a biztonságot integrálja a DevOps folyamatba.",
	},
	{
		term_en: "Encryption",
		term_hu: "Titkosítás",
		description_en:
			"The process of converting information into a code to prevent unauthorized access.",
		description_hu:
			"Az információ kódolásának folyamata, hogy megakadályozza a jogosulatlan hozzáférést.",
	},
	{
		term_en: "Firewall",
		term_hu: "Tűzfal",
		description_en:
			"A network security system that monitors and controls incoming and outgoing traffic.",
		description_hu:
			"Hálózatbiztonsági rendszer, amely figyeli és szabályozza a bejövő és kimenő forgalmat.",
	},
	{
		term_en: "Frontend",
		term_hu: "Felhasználói felület",
		description_en:
			"The part of a web application that users interact with directly.",
		description_hu:
			"A webalkalmazás azon része, amelyet a felhasználók közvetlenül kezelnek.",
	},
	{
		term_en: "Hybrid Cloud",
		term_hu: "Hibrid felhő",
		description_en:
			"A computing environment that combines on-premises, private cloud, and public cloud services.",
		description_hu:
			"Számítástechnikai környezet, amely az on-premise, privát felhő és nyilvános felhő szolgáltatásokat ötvözi.",
	},
	{
		term_en: "Incident Response",
		term_hu: "Incidens válaszadás",
		description_en:
			"The approach taken to prepare for, detect, and respond to cybersecurity incidents.",
		description_hu:
			"Az a megközelítés, amelyet a kiberbiztonsági incidensek előkészítésére, észlelésére és válaszadására alkalmaznak.",
	},
	{
		term_en: "Internet of Things (IoT)",
		term_hu: "Dolgok Internete (IoT)",
		description_en:
			"A network of physical devices connected to the internet, able to collect and exchange data.",
		description_hu:
			"Fizikai eszközök hálózata, amelyek kapcsolódnak az internethez, és képesek adatokat gyűjteni és cserélni.",
	},
	{
		term_en: "Load Balancer",
		term_hu: "Terheléselosztó",
		description_en:
			"A device that distributes network traffic across multiple servers.",
		description_hu:
			"Eszköz, amely a hálózati forgalmat több szerver között osztja el.",
	},
	{
		term_en: "Machine Learning",
		term_hu: "Gépi tanulás",
		description_en:
			"A branch of artificial intelligence that enables systems to learn from data.",
		description_hu:
			"Az AI egyik ága, amely lehetővé teszi a rendszerek számára, hogy tanuljanak az adatokból.",
	},
	{
		term_en: "Microservices",
		term_hu: "Mikroszolgáltatások",
		description_en:
			"An architectural style that structures an application as a collection of small, loosely coupled services.",
		description_hu:
			"Olyan architektúra stílus, amely egy alkalmazást kis, lazán kapcsolódó szolgáltatások gyűjteményeként szervez meg.",
	},
	{
		term_en: "Multi-Factor Authentication (MFA)",
		term_hu: "Többlépcsős hitelesítés (MFA)",
		description_en:
			"A security system that requires more than one method of authentication from independent sources.",
		description_hu:
			"Biztonsági rendszer, amely több hitelesítési módszert igényel egymástól független forrásokból.",
	},
	{
		term_en: "Natural Language Processing (NLP)",
		term_hu: "Természetes nyelvfeldolgozás (NLP)",
		description_en:
			"A field of AI that focuses on the interaction between computers and human language.",
		description_hu:
			"Az AI egyik ága, amely a számítógépek és az emberi nyelv közötti interakcióra összpontosít.",
	},
	{
		term_en: "Network",
		term_hu: "Hálózat",
		description_en:
			"A group of interconnected devices that communicate with each other.",
		description_hu:
			"Olyan eszközök csoportja, amelyek összekapcsolódnak és kommunikálnak egymással.",
	},
	{
		term_en: "Open Source",
		term_hu: "Nyílt forráskódú",
		description_en:
			"Software with source code that anyone can inspect, modify, and enhance.",
		description_hu:
			"Olyan szoftver, amelynek forráskódja bárki által megtekinthető, módosítható és fejleszthető.",
	},
	{
		term_en: "Orchestration",
		term_hu: "Orkesztráció",
		description_en:
			"The automated configuration, management, and coordination of computer systems, applications, and services.",
		description_hu:
			"Számítógépes rendszerek, alkalmazások és szolgáltatások automatikus konfigurálása, kezelése és összehangolása.",
	},
	{
		term_en: "Penetration Testing",
		term_hu: "Behatolási tesztelés",
		description_en:
			"A security practice where a system is tested for vulnerabilities by simulating attacks.",
		description_hu:
			"Biztonsági gyakorlat, amely során egy rendszert sebezhetőségek tesztelésére tesztelnek szimulált támadásokkal.",
	},
	{
		term_en: "Phishing",
		term_hu: "Adathalászat",
		description_en:
			"A cyber attack where fraudulent communication is used to trick individuals into revealing sensitive information.",
		description_hu:
			"Olyan kiber támadás, amelyben hamis kommunikációval próbálják rávenni az egyéneket érzékeny adatok felfedésére.",
	},
	{
		term_en: "Platform as a Service (PaaS)",
		term_hu: "Platform mint szolgáltatás (PaaS)",
		description_en:
			"A cloud computing model that provides a platform allowing customers to develop, run, and manage applications.",
		description_hu:
			"Felhőalapú számítástechnikai modell, amely egy platformot biztosít az ügyfelek számára alkalmazások fejlesztéséhez, futtatásához és kezeléséhez.",
	},
	{
		term_en: "Privacy by Design",
		term_hu: "Adatvédelem tervezés alapján",
		description_en:
			"An approach that promotes building privacy and data protection into systems and processes from the start.",
		description_hu:
			"Olyan megközelítés, amely az adatvédelmet és az adatvédelmi intézkedéseket már a rendszerek és folyamatok tervezési szakaszában beépíti.",
	},
	{
		term_en: "Proxy Server",
		term_hu: "Proxy szerver",
		description_en:
			"A server that acts as an intermediary for requests from clients seeking resources from other servers.",
		description_hu:
			"Szerver, amely közvetítőként működik a kliensek és más szerverek között az erőforrásokhoz való hozzáférés érdekében.",
	},
	{
		term_en: "Public Key Infrastructure (PKI)",
		term_hu: "Nyilvános kulcsú infrastruktúra (PKI)",
		description_en:
			"A system for the creation, distribution, and management of digital certificates.",
		description_hu:
			"Rendszer a digitális tanúsítványok létrehozására, terjesztésére és kezelésére.",
	},
	{
		term_en: "Redundancy",
		term_hu: "Redundancia",
		description_en:
			"The inclusion of extra components in a system to increase reliability in case of failure.",
		description_hu:
			"További komponensek beépítése egy rendszerbe a megbízhatóság növelése érdekében meghibásodás esetén.",
	},
	{
		term_en: "Risk Assessment",
		term_hu: "Kockázatértékelés",
		description_en:
			"The process of identifying, analyzing, and evaluating potential risks to a system or organization.",
		description_hu:
			"Az a folyamat, amely során azonosítják, elemzik és értékelik a rendszer vagy szervezet lehetséges kockázatait.",
	},
	{
		term_en: "Scrum",
		term_hu: "Scrum",
		description_en:
			"An agile framework for managing complex projects, particularly software development.",
		description_hu:
			"Agilis keretrendszer komplex projektek, különösen szoftverfejlesztés kezelésére.",
	},
	{
		term_en: "Serverless Computing",
		term_hu: "Szerver nélküli számítástechnika",
		description_en:
			"A cloud computing model where the cloud provider manages the server infrastructure.",
		description_hu:
			"Felhőalapú számítástechnikai modell, amelyben a felhőszolgáltató kezeli a szerverinfrastruktúrát.",
	},
	{
		term_en: "Single Sign-On (SSO)",
		term_hu: "Egyszeri bejelentkezés (SSO)",
		description_en:
			"A user authentication process that allows access to multiple applications with a single set of login credentials.",
		description_hu:
			"Olyan felhasználói hitelesítési folyamat, amely egyetlen bejelentkezési hitelesítő adatokkal több alkalmazáshoz is hozzáférést biztosít.",
	},
	{
		term_en: "Software as a Service (SaaS)",
		term_hu: "Szoftver mint szolgáltatás (SaaS)",
		description_en:
			"A cloud computing model where software is delivered over the internet and accessed via a web browser.",
		description_hu:
			"Felhőalapú számítástechnikai modell, amelyben a szoftver az interneten keresztül érhető el, és webes böngészőn keresztül használható.",
	},
	{
		term_en: "Threat Intelligence",
		term_hu: "Fenyegetésfelderítés",
		description_en:
			"Information gathered about potential or actual threats to an organization’s security.",
		description_hu:
			"Olyan információk összegyűjtése, amelyek potenciális vagy tényleges fenyegetést jelenthetnek egy szervezet biztonságára.",
	},
	{
		term_en: "Virtual Machine",
		term_hu: "Virtuális gép",
		description_en:
			"A software-based emulation of a physical computer that can run applications like a real computer.",
		description_hu:
			"Egy fizikai számítógép szoftver alapú emulációja, amely alkalmazásokat futtathat, mint egy valódi számítógép.",
	},
	{
		term_en: "Virtual Private Network (VPN)",
		term_hu: "Virtuális magánhálózat (VPN)",
		description_en:
			"A technology that creates a secure, encrypted connection over a less secure network.",
		description_hu:
			"Technológia, amely biztonságos, titkosított kapcsolatot hoz létre egy kevésbé biztonságos hálózaton keresztül.",
	},
	{
		term_en: "Software Development Life Cycle (SDLC)",
		term_hu: "Szoftverfejlesztési életciklusa",
		description_en:
			"A framework for developing software, including planning, development, testing, and maintenance.",
		description_hu:
			"Szoftverfejlesztési keretrendszer, beleértve a tervezést, fejlesztést, tesztelést és karbantartást.",
	},
	{
		term_en: "Asynchronous Programming",
		term_hu: "Aszinkron programozás",
		description_en:
			"A programming paradigm where tasks are executed independently of the main program flow, allowing for non-blocking operations.",
		description_hu:
			"Olyan programozási paradigma, ahol a feladatok függetlenül futnak a fő programfolyamtól, lehetővé téve a blokkolás nélküli műveleteket.",
	},
	{
		term_en: "Distributed Ledger Technology (DLT)",
		term_hu: "Elosztott főkönyvi technológia",
		description_en:
			"A decentralized database system where records are distributed across multiple locations, ensuring transparency and immutability.",
		description_hu:
			"Olyan decentralizált adatbázis-rendszer, ahol a rekordok több helyszínen kerülnek elosztásra, biztosítva a transzparenciát és a változtathatatlanságot.",
	},
	{
		term_en: "Microservices Architecture",
		term_hu: "Mikroszolgáltatás-architektúra",
		description_en:
			"An architectural style where an application is composed of small, independently deployable services, each with its own functionality.",
		description_hu:
			"Olyan architektúra, ahol az alkalmazás kis, függetlenül telepíthető szolgáltatásokból áll, mindegyik saját funkcionalitással.",
	},
	{
		term_en: "Immutable Infrastructure",
		term_hu: "Változtathatatlan infrastruktúra",
		description_en:
			"A concept where servers or infrastructure components are not modified after they are deployed; any changes require redeploying the infrastructure.",
		description_hu:
			"Olyan elgondolás, amely szerint a szerverek vagy az infrastruktúra összetevői nem módosíthatók a telepítés után; bármilyen változtatás újratelepítést igényel.",
	},
	{
		term_en: "Event-Driven Architecture",
		term_hu: "Eseményvezérelt architektúra",
		description_en:
			"An architectural model where the flow of the program is determined by events or messages rather than a sequential control flow.",
		description_hu:
			"Olyan architektúra, amelyben a program folyamata események vagy üzenetek határozzák meg, nem pedig egy szekvenciális vezérlési folyamat.",
	},
	{
		term_en: "Continuous Integration / Continuous Deployment (CI/CD)",
		term_hu: "Folyamatos integráció / Folyamatos telepítés (CI/CD)",
		description_en:
			"A set of software development practices that allow code changes to be automatically tested, integrated, and deployed to production environments.",
		description_hu:
			"A szoftverfejlesztési gyakorlatok összessége, amelyek lehetővé teszik a kódváltozások automatikus tesztelését, integrálását és telepítését a termelési környezetekbe.",
	},
	{
		term_en: "Hyperconverged Infrastructure (HCI)",
		term_hu: "Hiperkonvergált infrastruktúra (HCI)",
		description_en:
			"An IT framework that combines compute, storage, and networking components into a single system to simplify data center management.",
		description_hu:
			"Olyan IT-keretrendszer, amely a számítástechnikát, tárolást és hálózati összetevőket egyetlen rendszerbe integrálja, egyszerűsítve az adatközpontok kezelését.",
	},
	{
		term_en: "Polyglot Persistence",
		term_hu: "Poliglot tartósság",
		description_en:
			"The practice of using different types of databases or storage technologies within a single application to meet varying data needs.",
		description_hu:
			"A különböző típusú adatbázisok vagy tárolási technológiák használata egyetlen alkalmazáson belül a különböző adatigények kielégítésére.",
	},
	{
		term_en: "Event Sourcing",
		term_hu: "Eseményforrás",
		description_en:
			"A design pattern where changes in an application's state are captured as a series of immutable events rather than updating the state directly.",
		description_hu:
			"Olyan tervezési minta, ahol az alkalmazás állapotának változásait egy sor változtathatatlan eseményként rögzítik, nem pedig közvetlenül az állapot frissítésével.",
	},
	{
		term_en: "CQRS (Command Query Responsibility Segregation)",
		term_hu: "CQRS (Parancs-lekérdezés felelősség szétválasztás)",
		description_en:
			"An architectural pattern that separates the reading and writing of data into distinct models to optimize performance, scalability, and security.",
		description_hu:
			"Olyan architektúrális minta, amely szétválasztja az adat olvasását és írását különböző modellekbe a teljesítmény, a skálázhatóság és a biztonság optimalizálása érdekében.",
	},
	{
		term_en: "CAP Theorem",
		term_hu: "CAP-tétel",
		description_en:
			"A principle that states it is impossible for a distributed data store to simultaneously guarantee Consistency, Availability, and Partition Tolerance.",
		description_hu:
			"Olyan elv, amely szerint egy elosztott adatbolt nem képes egyszerre garantálni a konzisztenciát, elérhetőséget és a partíciós toleranciát.",
	},
	{
		term_en: "Turing Completeness",
		term_hu: "Turing-befogadhatóság",
		description_en:
			"A system is considered Turing complete if it can simulate any Turing machine, meaning it can compute anything that is computationally feasible.",
		description_hu:
			"Egy rendszert Turing-befogadhatónak tekintünk, ha képes szimulálni bármilyen Turing-gépet, azaz képes kiszámolni bármit, ami számításilag lehetséges.",
	},
	{
		term_en: "Hadoop Distributed File System (HDFS)",
		term_hu: "Hadoop elosztott fájlrendszer (HDFS)",
		description_en:
			"A distributed file system designed to store large datasets across multiple machines in a reliable, scalable way, typically used in big data processing.",
		description_hu:
			"Olyan elosztott fájlrendszer, amelyet nagy adathalmazok tárolására terveztek több gépen megbízható, skálázható módon, jellemzően a nagy adatfeldolgozás során.",
	},
	{
		term_en: "Idempotency",
		term_hu: "Idempotencia",
		description_en:
			"A property of operations in computing where performing the same operation multiple times has the same effect as performing it once.",
		description_hu:
			"A számítástechnikai műveletek olyan tulajdonsága, ahol ugyanazon művelet többszöri végrehajtása ugyanazt az eredményt adja, mint az egyszeri végrehajtás.",
	},
	{
		term_en: "Anti-Pattern",
		term_hu: "Antiminta",
		description_en:
			"A common solution to a recurring problem that is ineffective or counterproductive, often leading to suboptimal results in software development.",
		description_hu:
			"Egy gyakori megoldás egy visszatérő problémára, amely hatástalan vagy ellenproductive, gyakran alacsonyabb szintű eredményekhez vezet a szoftverfejlesztésben.",
	},
	{
		term_en: "Monads",
		term_hu: "Monádok",
		description_en:
			"A concept from functional programming that encapsulates behavior like state, side effects, and I/O into a unified structure, often used to manage side effects in a pure functional style.",
		description_hu:
			"A funkcionális programozásból származó fogalom, amely a viselkedéseket, mint az állapot, mellékhatások és I/O, egy egységes struktúrába csomagolja, gyakran használják mellékhatások kezelésére tiszta funkcionális stílusban.",
	},
	{
		term_en: "Zettabyte",
		term_hu: "Zettabájt",
		description_en:
			"A unit of digital information storage equivalent to 1 sextillion (10^21) bytes, used to describe extremely large data sets.",
		description_hu:
			"A digitális információ tárolásának mértékegysége, amely 1 sextillió (10^21) bájtnak felel meg, és rendkívül nagy adatállományok leírására használják.",
	},
	{
		term_en: "Polyglot Persistence",
		term_hu: "Poliglot tartósság",
		description_en:
			"The practice of using different types of databases or storage technologies within a single application to meet varying data needs.",
		description_hu:
			"A különböző típusú adatbázisok vagy tárolási technológiák használata egyetlen alkalmazáson belül a különböző adatigények kielégítésére.",
	},
	{
		term_en: "Event Sourcing",
		term_hu: "Eseményforrás",
		description_en:
			"A design pattern where changes in an application's state are captured as a series of immutable events rather than updating the state directly.",
		description_hu:
			"Olyan tervezési minta, ahol az alkalmazás állapotának változásait egy sor változtathatatlan eseményként rögzítik, nem pedig közvetlenül az állapot frissítésével.",
	},
	{
		term_en: "CQRS (Command Query Responsibility Segregation)",
		term_hu: "CQRS (Parancs-lekérdezés felelősség szétválasztás)",
		description_en:
			"An architectural pattern that separates the reading and writing of data into distinct models to optimize performance, scalability, and security.",
		description_hu:
			"Olyan architektúrális minta, amely szétválasztja az adat olvasását és írását különböző modellekbe a teljesítmény, a skálázhatóság és a biztonság optimalizálása érdekében.",
	},
	{
		term_en: "CAP Theorem",
		term_hu: "CAP-tétel",
		description_en:
			"A principle that states it is impossible for a distributed data store to simultaneously guarantee Consistency, Availability, and Partition Tolerance.",
		description_hu:
			"Olyan elv, amely szerint egy elosztott adatbolt nem képes egyszerre garantálni a konzisztenciát, elérhetőséget és a partíciós toleranciát.",
	},
	{
		term_en: "Turing Completeness",
		term_hu: "Turing-befogadhatóság",
		description_en:
			"A system is considered Turing complete if it can simulate any Turing machine, meaning it can compute anything that is computationally feasible.",
		description_hu:
			"Egy rendszert Turing-befogadhatónak tekintünk, ha képes szimulálni bármilyen Turing-gépet, azaz képes kiszámolni bármit, ami számításilag lehetséges.",
	},
	{
		term_en: "Hadoop Distributed File System (HDFS)",
		term_hu: "Hadoop elosztott fájlrendszer (HDFS)",
		description_en:
			"A distributed file system designed to store large datasets across multiple machines in a reliable, scalable way, typically used in big data processing.",
		description_hu:
			"Olyan elosztott fájlrendszer, amelyet nagy adathalmazok tárolására terveztek több gépen megbízható, skálázható módon, jellemzően a nagy adatfeldolgozás során.",
	},
	{
		term_en: "Idempotency",
		term_hu: "Idempotencia",
		description_en:
			"A property of operations in computing where performing the same operation multiple times has the same effect as performing it once.",
		description_hu:
			"A számítástechnikai műveletek olyan tulajdonsága, ahol ugyanazon művelet többszöri végrehajtása ugyanazt az eredményt adja, mint az egyszeri végrehajtás.",
	},
	{
		term_en: "Anti-Pattern",
		term_hu: "Antiminta",
		description_en:
			"A common solution to a recurring problem that is ineffective or counterproductive, often leading to suboptimal results in software development.",
		description_hu:
			"Egy gyakori megoldás egy visszatérő problémára, amely hatástalan vagy ellenproductive, gyakran alacsonyabb szintű eredményekhez vezet a szoftverfejlesztésben.",
	},
	{
		term_en: "Monads",
		term_hu: "Monádok",
		description_en:
			"A concept from functional programming that encapsulates behavior like state, side effects, and I/O into a unified structure, often used to manage side effects in a pure functional style.",
		description_hu:
			"A funkcionális programozásból származó fogalom, amely a viselkedéseket, mint az állapot, mellékhatások és I/O, egy egységes struktúrába csomagolja, gyakran használják mellékhatások kezelésére tiszta funkcionális stílusban.",
	},
	{
		term_en: "Zettabyte",
		term_hu: "Zettabájt",
		description_en:
			"A unit of digital information storage equivalent to 1 sextillion (10^21) bytes, used to describe extremely large data sets.",
		description_hu:
			"A digitális információ tárolásának mértékegysége, amely 1 sextillió (10^21) bájtnak felel meg, és rendkívül nagy adatállományok leírására használják.",
	},
  {
    "term_en": "Reactive Programming",
    "term_hu": "Reaktív programozás",
    "description_en": "A programming paradigm that focuses on asynchronous data streams and the propagation of changes, allowing systems to react to changes in real-time.",
    "description_hu": "Olyan programozási paradigma, amely az aszinkron adatfolyamokra és a változások propagálására összpontosít, lehetővé téve a rendszerek számára, hogy valós időben reagáljanak a változásokra."
  },
  {
    "term_en": "Lambda Architecture",
    "term_hu": "Lambda architektúra",
    "description_en": "A data-processing architecture that combines both batch-processing and real-time stream-processing methods to provide a comprehensive approach to big data.",
    "description_hu": "Olyan adatfeldolgozó architektúra, amely kombinálja a tétel-alapú feldolgozást és a valós idejű adatfolyam-feldolgozást, hogy átfogó megközelítést biztosítson a nagy adatkezeléshez."
  },
  {
    "term_en": "Data Lake",
    "term_hu": "Adat-tó",
    "description_en": "A storage repository that holds vast amounts of raw, unstructured, or semi-structured data, typically used for big data analytics.",
    "description_hu": "Olyan tárolóhely, amely hatalmas mennyiségű nyers, struktúrázatlan vagy félig struktúrált adatot tartalmaz, jellemzően nagy adat-elemzésekhez használják."
  },
  {
    "term_en": "Artificial General Intelligence (AGI)",
    "term_hu": "Mesterséges Általános Intelligencia (AGI)",
    "description_en": "A theoretical form of AI that can understand, learn, and apply intelligence across a broad range of tasks, resembling human cognitive abilities.",
    "description_hu": "Egy elméleti mesterséges intelligencia forma, amely képes megérteni, tanulni és alkalmazni az intelligenciát széles feladatkörökben, hasonlóan az emberi kognitív képességekhez."
  },
  {
    "term_en": "Concurrency",
    "term_hu": "Párhuzamosság",
    "description_en": "The ability of a system to handle multiple tasks simultaneously, often by running processes or threads in parallel, while managing access to shared resources.",
    "description_hu": "A rendszer képessége, hogy egyszerre több feladatot kezeljen, gyakran párhuzamosan futtatva folyamatokat vagy szálakat, miközben kezeli a közös erőforrásokhoz való hozzáférést."
  },
  {
    "term_en": "Service-Oriented Architecture (SOA)",
    "term_hu": "Szolgáltatásorientált architektúra (SOA)",
    "description_en": "An architectural pattern where software components, or services, are created to be reusable and are distributed across a network for integration and communication.",
    "description_hu": "Olyan architektúrális minta, amelyben a szoftverkomponensek, vagy szolgáltatások újrahasználhatóak, és hálózaton keresztül kerülnek integrálásra és kommunikációra."
  },
  {
    "term_en": "Sharding",
    "term_hu": "Sharding",
    "description_en": "A database architecture pattern that divides data into smaller, more manageable pieces, or shards, which are stored across multiple servers to improve scalability.",
    "description_hu": "Olyan adatbázis-architektúra minta, amely az adatokat kisebb, kezelhetőbb darabokra, vagy sharde-okra osztja, és több szerveren tárolja azokat a skálázhatóság javítása érdekében."
  },
  {
    "term_en": "Hypervisor",
    "term_hu": "Hipervizor",
    "description_en": "A layer of software or firmware that creates and manages virtual machines, enabling multiple operating systems to run on a single physical machine.",
    "description_hu": "Olyan szoftver- vagy firmware réteg, amely létrehozza és kezeli a virtuális gépeket, lehetővé téve, hogy több operációs rendszer fusson egyetlen fizikai gépen."
  },
  {
    "term_en": "Erlang",
    "term_hu": "Erlang",
    "description_en": "A functional programming language designed for highly concurrent and fault-tolerant systems, often used in telecommunications and distributed systems.",
    "description_hu": "Funkcionális programozási nyelv, amelyet a rendkívül párhuzamos és hibátűrő rendszerekhez terveztek, gyakran használják telekommunikációs és elosztott rendszerekben."
  },
  {
    "term_en": "Homomorphic Encryption",
    "term_hu": "Homomorfikus titkosítás",
    "description_en": "A form of encryption that allows computation on ciphertext, enabling data to remain encrypted while being processed, preserving privacy in cloud computing.",
    "description_hu": "Olyan titkosítási forma, amely lehetővé teszi a titkosított szövegen végzett számításokat, így az adatok titkosítva maradnak a feldolgozás során, biztosítva a magánélet védelmét a felhőszámítástechnikában."
  },
  {
    "term_en": "Quorum Consensus",
    "term_hu": "Kvórum konszenzus",
    "description_en": "A distributed consensus mechanism used in databases and blockchain systems, where a minimum number of participants must agree to a transaction to validate it.",
    "description_hu": "Elosztott konszenzus mechanizmus, amelyet adatbázisokban és blokklánc rendszerekben alkalmaznak, ahol a tranzakció érvényesítéséhez minimális számú résztvevőnek kell egyetértenie."
  },
  {
    "term_en": "Oracled Data",
    "term_hu": "Oracle adat",
    "description_en": "Data generated or sourced from an oracle, which refers to a trusted external data source in blockchain or decentralized applications.",
    "description_hu": "Olyan adat, amely egy orákulumból származik, ami egy megbízható külső adatforrást jelent a blokkláncban vagy decentralizált alkalmazásokban."
  },
  {
    "term_en": "Capex (Capital Expenditure)",
    "term_hu": "Tőke kiadás",
    "description_en": "The funds used by an organization to acquire or upgrade physical assets like servers, networking equipment, and data centers.",
    "description_hu": "Azok a pénzeszközök, amelyeket egy szervezet fizikai eszközök, például szerverek, hálózati berendezések és adatközpontok megszerzésére vagy frissítésére használ."
  },
  {
    "term_en": "Stateful Protocol",
    "term_hu": "Állapottartó protokoll",
    "description_en": "A communication protocol that retains information about the previous interactions between systems to manage ongoing sessions, e.g., TCP.",
    "description_hu": "Olyan kommunikációs protokoll, amely megőrzi az előző rendszerek közötti interakciók adatait az éppen zajló munkamenetek kezelésére, például a TCP."
  },
  {
    "term_en": "Synthetic Monitoring",
    "term_hu": "Szintetikus monitorozás",
    "description_en": "A method of monitoring web applications by simulating user interactions and tracking performance metrics to proactively identify issues.",
    "description_hu": "Webalkalmazások monitorozásának egy módszere, amely a felhasználói interakciók szimulálásával és a teljesítmény mérőszámok nyomon követésével előre azonosítja a problémákat."
  },
  {
    "term_en": "Stochastic Gradient Descent (SGD)",
    "term_hu": "Sztokasztikus gradiens csökkenés (SGD)",
    "description_en": "An optimization algorithm used in machine learning, particularly in training neural networks, that updates model parameters iteratively using a random subset of data.",
    "description_hu": "Olyan optimalizációs algoritmus, amelyet a gépi tanulásban, különösen a neurális hálózatok képzésében alkalmaznak, és amely a modell paramétereit iteratívan frissíti az adathalmaz véletlenszerű részhalmazával."
  },
  {
    "term_en": "Provenance",
    "term_hu": "Származás",
    "description_en": "In data management, provenance refers to the origin or history of data, including its creation, movement, and any transformations it undergoes.",
    "description_hu": "Az adatkezelésben a származás az adatok eredetére vagy történetére utal, beleértve azok létrehozását, mozgását és azokat a transzformációkat, amelyeken keresztülmentek."
  },
  {
    "term_en": "Heterogeneous Computing",
    "term_hu": "Heterogén számítástechnika",
    "description_en": "A computing architecture that uses different types of processors or cores, such as CPUs and GPUs, to handle various computational tasks efficiently.",
    "description_hu": "Olyan számítástechnikai architektúra, amely különböző típusú processzorokat vagy magokat, például CPU-kat és GPU-kat használ, hogy hatékonyan kezelje a különböző számítási feladatokat."
  },
  {
    "term_en": "Fuzz Testing",
    "term_hu": "Fuzz tesztelés",
    "description_en": "A software testing technique that involves inputting random or unexpected data into a program to find vulnerabilities or crashes.",
    "description_hu": "Olyan szoftvertesztelési technika, amely véletlenszerű vagy váratlan adatokat juttat a programba annak érdekében, hogy sebezhetőségeket vagy összeomlásokat találjon."
  }
];
export default data;
