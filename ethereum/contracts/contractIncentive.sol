pragma solidity ^0.4.17;

contract CarbonTax {

   address public adminAddress;

    struct users {
        string name;        // name of the user
        address userAddress;  // address of the users account
        /* may change */
        uint[] data;        // carbon data sent by the user
        string[] timestamp;   // timestamp of the user
        uint[] incentives;
    }

    mapping(address => users) public usr;
    mapping(address => bool) public usrPresent;


    struct industry {
        string name;        // name of the industry
        address indAddress;   // address of the industry
    }

        uint[] uAddress;    // address of the user who sent data
        uint[] data;        // carbon data sent by the user above threshhold
        string[] dataTime;   // timestamp of the user data

    industry public ind;

    uint public threshValue;        // the threshHold Value Set by the creator of this contract

    uint public totalUsers;         // total no of users sending in the data
    uint public countAboveThresh;   // carbonfoot print value above the threshold value
    address[] public incentiveUsers;       // the users who will recive incentive for the data sent by them

    uint public incentiveAmount;           // the amount of incentive amount
    bool public addFine = false;

    uint refTimeStamp;  // this is refrence timestamp of the contract
    uint timeperiod;    // this is the time period of the contract in which user sends their data

    function addData(uint d, string t) public {
        require(usrPresent[msg.sender]);
        usr[msg.sender].data.push(d);
        usr[msg.sender].timestamp.push(t);
        if(d>threshValue){
            // register this data
            countAboveThresh++;
            incentiveUsers.push(msg.sender);
            incentiveAmount = countAboveThresh;
            dataTime.push(t);
            if(4*countAboveThresh > 3*totalUsers){
                addFine = true;
                countAboveThresh = 0;
                //incentiveUsers = new address[](0);  // dont clear the array yet wait for incentive to be credited
            }

        }
    }



    function addIndustry(string n,address ad) public restricted {     // only manager can add a industry
        ind.name = n;
        ind.indAddress = ad;
    }

    modifier restricted() {
        require(msg.sender == adminAddress);
        _;
    }


    function CarbonTax(uint t) public {
        adminAddress = msg.sender;
        threshValue = t;
    }

    function setThresh(uint th) public restricted {
        threshValue = th;
    }

    function addUser(string n) public { // user sign in for the project
        require(!usrPresent[msg.sender]);
        users memory newUser = users({
                name : n,
                userAddress : msg.sender,
                data : new uint[](0),
                timestamp : new string[](0),
                incentives: new uint[](0)
            });
            usr[msg.sender] = newUser;
            totalUsers++;
            usrPresent[msg.sender] = true;
    }

    function getUserData(address u) public view returns (uint[]) {
        require(usrPresent[u]);
        return usr[u].data;
    }

    function payFine() public payable {
        require(msg.sender == ind.indAddress);
        require(addFine);
        addFine = false;
        for(uint i=0;i<incentiveUsers.length;i++) {
            //incentiveUsers[i].transfer(incentiveAmount/incentiveUsers.length);
            incentiveUsers[i].transfer(1 ether);
            usr[incentiveUsers[i]].incentives.push(1);
        }

    }

    function getUserPresence(address u) public view returns (bool) {
        return usrPresent[u];
    }

    function giveIncentive(address u) public payable {
        usr[u].incentives.push(1);
        u.transfer(1);
    }

    function getUserIncentive(address adr) public view returns (uint[]) {
        return usr[adr].incentives;
    }

    function getFineAMount() public view returns(uint) {
        return incentiveAmount;
    }



}
