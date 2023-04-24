import {
    GetLoot,
    LootTableEntry,
} from 'loot-table-advanced'
import { plot } from 'nodeplotlib'
  
function generate_loot() {
    
    const drops = [
        LootTableEntry('mystic_hat', 1),
        LootTableEntry('mystic_top', 1),
        LootTableEntry('mystic_bottoms', 1),
        LootTableEntry('mystic_gloves', 1),
        LootTableEntry('mystic_boots', 1),
        LootTableEntry('broken_hasta', 5),
        LootTableEntry('normies', 990)
    ]

    function ResolveHelper(id) {
        switch (id) {
            case 'drops':
                return drops;
        }
        return null;
    }

    let mystic_hat = 0
    let mystic_top = 0
    let mystic_bottoms = 0
    let mystic_gloves = 0
    let mystic_boots = 0
    let broken_hasta = 0
    let done = 10000
    let kc = 0

    for (let i=0; i<done; i++) {
        let loot = GetLoot(drops, 1, ResolveHelper)
        let id = loot[0].id

        switch (id) {
            case 'mystic_hat':
                mystic_hat = mystic_hat + 1
                if (mystic_hat === 1) {
                  //console.log('Mystic hat dusk obtained')
                }
                break
            case 'mystic_top':
                mystic_top = mystic_top + 1
                if (mystic_top === 1) {
                  //console.log('Mystic top dusk obtained')
                }
                break
            case 'mystic_bottoms':
                mystic_bottoms = mystic_bottoms + 1
                if (mystic_bottoms === 1) {
                  //console.log('Mystic bottoms dusk obtained')
                }
                break
            case 'mystic_gloves':
                mystic_gloves = mystic_gloves + 1
                if (mystic_gloves === 1) {
                  //console.log('Mystic gloves dusk obtained')
                }
                break
            case 'mystic_boots':
                mystic_boots = mystic_boots + 1
                if (mystic_boots === 1) {
                  //console.log('Mystic boots dusk obtained')
                }
                break
            case 'broken_hasta':
                broken_hasta = broken_hasta + 1
                if (broken_hasta === 1) {
                  //console.log('Broken dragon hasta obtained')
                }
                break
        }
        
        
        if ( mystic_hat >= 1 && mystic_top >= 1 && mystic_bottoms >= 1 && mystic_boots >= 1 && mystic_gloves >= 1 && broken_hasta >= 1) {
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

    console.log(`Average kc to complete log: '${avg_kc}'`)
}

main()
