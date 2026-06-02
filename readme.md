# Tron gRPC Bug

## Bug Description

Block `81853922` received via gRPC is not deserializable.

## Environment

**Network**
Mainnet

**Software Versions**
```
Version: GreatVoyage-v4.8.1
```

## Expected Behavior

Node returns deserializable data.

## Actual Behavior

Response message parsing error: index out of range: 60581 + 66211600 > 96952

## Frequency

- [ ] Always (100%)
- [ ] Frequently (>50%)
- [ ] Sometimes (10-50%)
- [x] Rarely (<10%)

I checked over 400k blocks and it is the only one block from them, that was not deserialized.

## Steps to Reproduce

1. Clone repoducing repo: https://github.com/nicklatkovich/tron-grpc-bug
2. `git submodule update` (clones googleapis and tron protos)
3. `npm i`: installs `grpc` packages
4. (optional) Set `TRON_GRPC_URL` env (default is `grpc.trongrid.io:50051`)
5. Run `node index`

## Logs and Error Messages

```
Error: 13 INTERNAL: Response message parsing error: index out of range: 60581 + 66211600 > 96952
```

## Additional Context

`GetBlockByNum` (legacy method) has the same issue for this block, just another cursor index and range (buffer size).
