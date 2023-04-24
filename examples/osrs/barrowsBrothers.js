import {
    GetLoot,
    LootTableEntry,
  } from 'loot-table-advanced'
  import { plot } from 'nodeplotlib'
    
    function generate_loot() {
    
        /*const uniques = [
            LootTableEntry('head', 1),
            LootTableEntry('body', 1),
            LootTableEntry('legs', 1),
            LootTableEntry('weapon', 1)
        ]*/
    
        const dharok = [
            LootTableEntry('d_head', 1),
            LootTableEntry('d_body', 1),
            LootTableEntry('d_legs', 1),
            LootTableEntry('d_weapon', 1)
        ]
    
        const guthan = [
            LootTableEntry('g_head', 1),
            LootTableEntry('g_body', 1),
            LootTableEntry('g_legs', 1),
            LootTableEntry('g_weapon', 1)
        ]
    
        const karil = [
            LootTableEntry('k_head', 1),
            LootTableEntry('k_body', 1),
            LootTableEntry('k_legs', 1),
            LootTableEntry('k_weapon', 1)
        ]
    
        const ahrim = [
            LootTableEntry('a_head', 1),
            LootTableEntry('a_body', 1),
            LootTableEntry('a_legs', 1),
            LootTableEntry('a_weapon', 1)
        ]
    
        const torag = [
            LootTableEntry('t_head', 1),
            LootTableEntry('t_body', 1),
            LootTableEntry('t_legs', 1),
            LootTableEntry('t_weapon', 1)
        ]
    
        const verac = [
            LootTableEntry('v_head', 1),
            LootTableEntry('v_body', 1),
            LootTableEntry('v_legs', 1),
            LootTableEntry('v_weapon', 1)
        ]
    
        const bros = [
            LootTableEntry('@dharok', 1),
            LootTableEntry('@guthan', 1),
            LootTableEntry('@karil', 1),
            LootTableEntry('@ahrim', 1),
            LootTableEntry('@torag', 1),
            LootTableEntry('@verac', 1)
        ]
    
        const drops = [
            LootTableEntry('@bros', 1),
            LootTableEntry('normies', 14)
        ]
    
        function ResolveHelper(id) {
            switch (id) {
                case 'dharok':
                    return dharok;
                case 'ahrim':
                    return ahrim;
                case 'guthan':
                    return guthan;
                case 'karil':
                    return karil;
                case 'torag':
                    return torag;
                case 'verac':
                    return verac;
                case 'bros':
                    return bros;
                case 'drops':
                    return drops;
            }
            return null;
        }
    
        let d_head = 0
        let d_body = 0
        let d_legs = 0
        let d_weapon = 0
        let g_head = 0
        let g_body = 0
        let g_legs = 0 
        let g_weapon = 0
        let k_head = 0
        let k_body = 0
        let k_legs = 0
        let k_weapon = 0
        let t_head = 0
        let t_body = 0
        let t_legs = 0
        let t_weapon = 0
        let v_head = 0
        let v_body = 0
        let v_legs = 0
        let v_weapon = 0
        let a_head = 0
        let a_body = 0
        let a_legs = 0
        let a_weapon = 0
        let done = 10000
        let kc = 0
    
        for (let i=0; i<done; i++) {
            let loot = GetLoot(drops, 1, ResolveHelper)
            let id = loot[0].id
    
            switch (id) {
                case 'd_head':
                    d_head = d_head + 1
                    if (d_head === 1) {
                      console.log('Dharok helm obtained')
                    }
                    break
                case 'd_body':
                    d_body = d_body + 1
                    if (d_body === 1) {
                      console.log('Dharok body obtained')
                    }
                    break
                case 'd_legs':
                    d_legs = d_legs + 1
                    if(d_legs === 1) {
                      console.log('Dharok legs obtained')
                    }
                    break
                case 'd_weapon':
                    d_weapon = d_weapon + 1
                    if (d_weapon === 1) {
                      console.log('Dharok greataxe obtained')
                    }
                    break
                case 'g_head':
                    g_head = g_head + 1
                    if (g_head === 1) {
                      console.log('Guthan helm obtained')
                    }
                    break
                case 'g_body':
                    g_body = g_body + 1
                    if (g_body === 1) {
                      console.log('Guthan body obtained')
                    }
                    break
                case 'g_legs':
                    g_legs = g_legs + 1
                    if (g_legs === 1) {
                      console.log('Guthan legs obtained')
                    }
                    break
                case 'g_weapon':
                    g_weapon = g_weapon + 1
                    if (g_weapon === 1) {
                      console.log('Guthan spear obtained')
                    }
                    break
                case 'k_head':
                    k_head = k_head + 1
                    if (k_head === 1) {
                      console.log('Karil helm obtained')
                    }
                    break
                case 'k_body':
                    k_body = k_body + 1
                    if (k_body === 1) {
                      console.log('Karil body obtained')
                    }
                    break
                case 'k_legs':
                    k_legs = k_legs + 1
                    if (k_legs === 1) {
                      console.log('Karil legs obtained')
                    }
                    break
                case 'k_weapon':
                    k_weapon = k_weapon + 1
                    if (k_weapon === 1) {
                      console.log('Karil crossbow obtained')
                    }
                    break
                case 't_head':
                    t_head = t_head + 1
                    if (t_head === 1) {
                      console.log('Torag helm obtained')
                    }
                    break
                case 't_body':
                    t_body = t_body + 1
                    if (t_body === 1) {
                      console.log('Torag body obtained')
                    }
                    break
                case 't_legs':
                    t_legs = t_legs + 1
                    if (t_legs === 1) {
                      console.log('Torag legs obtained')
                    }
                    break
                case 't_weapon':
                    t_weapon = t_weapon + 1
                    if (t_weapon === 1) {
                      console.log('Torag hammers obtained')
                    }
                    break
                case 'v_head':
                    v_head = v_head + 1
                    if (v_head === 1) {
                      console.log('Verac helm obtained')
                    }
                    break
                case 'v_body':
                    v_body = v_body + 1
                    if (v_body === 1) {
                      console.log('Verac body obtained')
                    }
                    break
                case 'v_legs':
                    v_legs = v_legs + 1
                    if (v_legs === 1) {
                      console.log('Verac legs obtained')
                    }
                    break
                case 'v_weapon':
                    v_weapon = v_weapon + 1
                    if (v_weapon === 1) {
                      console.log('Verac flail obtained')
                    }
                    break
                case 'a_head':
                    a_head = a_head + 1
                    if (a_head === 1) {
                      console.log('Ahrim helm obtained')
                    }
                    break
                case 'a_body':
                    a_body = a_body + 1
                    if (a_body === 1) {
                      console.log('Ahrim legs obtained')
                    }
                    break
                case 'a_legs':
                    a_legs = a_legs + 1
                    if (a_legs === 1) {
                      console.log('Ahrim legs obtained')
                    }
                    break
                case 'a_weapon':
                    a_weapon = a_weapon + 1
                    if (a_weapon === 1) {
                      console.log('Ahrim staff obtained')
                    }
                    break
            }
            
            
            if (d_head >= 1 && d_body >= 1 && d_legs >= 1 && d_weapon >=1 && g_head >= 1 && g_body >= 1 && g_legs >= 1 && g_weapon >= 1 && k_head >= 1 && 
            k_body >= 1 && k_legs >= 1 && k_weapon >= 1 && t_head >= 1 && t_body >= 1 && t_legs >= 1 && t_weapon >= 1 && v_head >= 1 && v_body >= 1 && 
            v_legs >= 1 && v_weapon >= 1 && a_head >= 1 && a_body >= 1 && a_legs >= 1 && a_weapon >= 1) {
                console.log(`KC for completed log: '${i}'`)
                kc = i
                return kc
            }
    
            if (i === done-1) {
                console.log(`Dry log KC: '${done}'`)
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
    