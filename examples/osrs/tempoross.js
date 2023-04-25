import {
    GetLoot,
    LootTableEntry,
} from 'loot-table-advanced'
import { plot } from 'nodeplotlib'
  
function generate_loot() {
    
    const drops = [
        LootTableEntry('pet', 1),
        LootTableEntry('tome', 5),
        LootTableEntry('fish', 5),
        LootTableEntry('box', 20),
        LootTableEntry('barrel', 20),
        LootTableEntry('normies', 7949)
    ]

    function ResolveHelper(id) {
        switch (id) {
            case 'drops':
                return drops;
        }
        return null;
    }

    let pet = 0
    let tome = 0
    let fish = 0
    let box = 0
    let barrel = 0
    let done = 30000
    let kc = 0

    for (let i=0; i<done; i++) {
        let loot = GetLoot(drops, 1, ResolveHelper)
        let id = loot[0].id

        switch (id) {
            case 'pet':
                pet = pet + 1
                if (pet === 1) {
                  console.log('Tiny tempor pet obtained')
                }
                break
            case 'tome':
                tome = tome + 1
                if (tome === 1) {
                  console.log('Tome of water obtained')
                }
                break
            case 'fish':
                fish = fish + 1
                if (fish === 1) {
                  console.log('Big harpoonfish obtained')
                }
                break
            case 'box':
                box = box + 1
                if (box === 1) {
                  console.log('Tackle box obtained')
                }
                break
            case 'barrel':
                barrel = barrel + 1
                if (barrel === 1) {
                  console.log('Fish barrel obtained')
                }
                break
        }
        
        
        if ( pet >= 1 && tome >= 1 && fish >= 1 && box >= 1 && barrel >= 1) {
            //console.log(`KC for completed log: '${i}'`)
            kc = i
            return kc
        }

        if (i === done-1) {
            //console.log(`Dry log KC: '${done}'`)
            return done
        }
    }
}

function main() {
    let total_kc = 0
    let sims = 10000
    let avg_kc = 0
    let kc_list = []

    for (let l=0; l<sims; l++){
        let temp_kc = generate_loot()
        total_kc = total_kc + temp_kc
        kc_list.push(temp_kc)
    }
    avg_kc = total_kc/sims

    const data = [
        {
          x: kc_list,
          type: 'histogram',
        },
      ]
      
    plot(data)

    console.log(`Average kc to complete Tempoross collection log: '${avg_kc}'`)
}

main()
